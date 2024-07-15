import React, { useState, useEffect, useRef } from 'react';
import { useSprings, animated, to as interpolate, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { feedback } from "../constants";
import styles from "../style";
import { quotes } from '../assets';

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i) => ({ x: 0, y: -1000, rot: 0, scale: 1.5 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const Testimonials2 = () => {
  const [order, setOrder] = useState(feedback.map((_, index) => index));
  const [cardSizes, setCardSizes] = useState([]);
  const [flipping, setFlipping] = useState(-1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const calculateCardSizes = () => {
      const sizes = feedback.map(item => {
        const contentLength = item.content.length;
        const baseSize = window.innerWidth < 640 ? 200 : 350; // Increased base size for desktop
        const additionalHeight = Math.ceil(contentLength / 100) * (window.innerWidth < 640 ? 30 : 20);
        return Math.min(baseSize + additionalHeight, window.innerWidth < 640 ? 400 : 600); // Increased max size for desktop
      });
      setCardSizes(sizes);
    };

    calculateCardSizes();
    window.addEventListener('resize', calculateCardSizes);
    return () => window.removeEventListener('resize', calculateCardSizes);
  }, []);

  const [props, api] = useSprings(feedback.length, i => ({
    ...to(i),
    from: from(i),
  }));

  const flipSpring = useSpring({
    rotateY: flipping >= 0 ? 180 : 0,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const bind = useDrag(({ args: [originalIndex], active, movement: [mx], velocity }) => {
    const currentIndex = order.indexOf(originalIndex);
    if (!active && Math.abs(mx) > 20) {
      setFlipping(originalIndex);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setOrder(order => {
          const newOrder = [...order];
          const movedItem = newOrder.splice(currentIndex, 1)[0];
          newOrder.push(movedItem);
          return newOrder;
        });
        setFlipping(-1);
      }, 200);
    }

    api.start(i => {
      const currentOrderIndex = order.indexOf(i);
      if (currentOrderIndex !== currentIndex) return;
      const x = active ? mx : 0;
      const rot = mx / 100;
      const scale = active ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        immediate: active,
        config: { friction: 50, tension: active ? 800 : 500 },
      };
    });
  });

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} relative w-full min-h-screen flex flex-col justify-center items-center py-8 px-4 sm:py-16 sm:px-6 blue_gradient`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} text-center md:text-left mb-4 md:mb-0`}>
          Client Testimonials <br className="sm:block hidden" /> and Stories
        </h2>
        <div className="w-full md:mt-0 mt-6 md:w-1/2">
          <p className={`${styles.paragraph} text-center md:text-left max-w-[450px] mx-auto md:mx-0`}>
            These are what clients that worked with SoloScale had to say about us
          </p>
        </div>
      </div>
      <div className="w-full h-[60vh] sm:h-[70vh] relative">
        {props.map((springProps, i) => {
          const { x, y, rot, scale } = springProps;
          const orderIndex = order.indexOf(i);
          return (
            <animated.div
              key={i}
              style={{
                x,
                y,
                position: 'absolute',
                width: '100%',
                height: '100%',
                willChange: 'transform',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: feedback.length - orderIndex,
              }}
            >
              <animated.div
                {...bind(i)}
                style={{
                  ...flipSpring,
                  transform: interpolate([rot, scale, flipSpring.rotateY], (r, s, ry) => 
                    `${trans(r, s)} rotateY(${flipping === i ? ry : 0}deg)`
                  ),
                  background: 'linear-gradient(to bottom, #1a1a1a, #2C3E50)',
                  width: '90%',
                  maxWidth: '600px',
                  height: `${cardSizes[i]}px`,
                  borderRadius: '20px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.2)',
                  touchAction: 'none',
                  overflow: 'hidden',
                }}
              >
                <div className="sm:overflow-hidden overflow-y-auto flex-grow">
                  <img src={quotes} alt="double_quotes" className="w-[30px] h-[20px] sm:w-[42.6px] sm:h-[27.6px] object-contain mb-4 sm:mb-6" />
                  <p className="font-poppins font-normal text-[14px] sm:text-[18px] leading-[24px] sm:leading-[32.4px] text-gray-200 mb-4 sm:mb-8">
                    {feedback[i].content}
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <img src={feedback[i].img} alt={feedback[i].name} className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full mr-3 sm:mr-4" />
                  <div>
                    <h4 className="font-poppins font-semibold text-[16px] sm:text-[22px] leading-[24px] sm:leading-[32px] text-gray-100">
                      {feedback[i].name}
                    </h4>
                    <p className="font-poppins font-normal text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] text-gray-400">
                      {feedback[i].title}
                    </p>
                  </div>
                </div>
              </animated.div>
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials2;