import useWindowStore from "@store/window.js";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

function WindowWrapper(Component, windowKey) {
  const Wrapped = (props) => {
    const {focusWindow, windows} = useWindowStore();
    const {isOpen, zIndex} = windows[windowKey];
    const ref = useRef(null);
    
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      
      el.style.display = "block";
      
      gsap.fromTo(el, {
        scale: 0,
        opacity: 0,
        y: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        y: 0,
        ease: "power4.out",
      });
    }, [isOpen]);
    
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      
      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });
      
      return () => instance.kill();
    }, []);
    
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);
    
    return (
      <section
        id={windowKey}
        ref={ref}
        style={{zIndex}}
        className="absolute"
      >
        <Component {...props}/>
      </section>
    );
  };
  
  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.Name || Component})`;
  
  return Wrapped;
}

export default WindowWrapper;