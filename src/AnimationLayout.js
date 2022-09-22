import { Outlet } from 'react-router-dom';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';

export default function AnimationLayout() {
  const { pathname } = useLocation();

  const animationConfiguration = {
    initial: { width: "105%" },
    animate: { width: "100%" },
    exit: { width: "110%" },
};

  return (
    <div>
      <motion.div
      key={pathname}
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
        <Outlet />
      </motion.div>
    </div>
  );
};