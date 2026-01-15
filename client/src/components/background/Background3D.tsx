import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SiTableau, SiPython, SiMysql, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";
import { FaChartBar, FaFileExcel } from "react-icons/fa";
import { useRef } from "react";

const FloatingIcon = ({ Icon, delay, x, y, size, color }: { Icon: any, delay: number, x: number, y: number, size: number, color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ 
        opacity: [0.2, 0.5, 0.2],
        x: [0, x, 0],
        y: [0, y, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 10 + Math.random() * 10, 
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut" 
      }}
      className="absolute z-0 pointer-events-none"
      style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
    >
      <Icon size={size} color={color} className="opacity-20 blur-[1px]" />
    </motion.div>
  );
};

export default function Background3D() {
  const icons = [
    { Icon: FaChartBar, color: "#F2C811" },
    { Icon: SiTableau, color: "#E97627" },
    { Icon: SiPython, color: "#3776AB" },
    { Icon: FaFileExcel, color: "#217346" },
    { Icon: SiMysql, color: "#4479A1" },
    { Icon: SiPandas, color: "#150458" },
    { Icon: SiNumpy, color: "#013243" },
    { Icon: SiScikitlearn, color: "#F7931E" },
  ];

  // Create an array of 20 random floating icons
  const floatingIcons = Array.from({ length: 20 }).map((_, i) => {
    const iconData = icons[i % icons.length];
    return (
      <FloatingIcon
        key={i}
        Icon={iconData.Icon}
        delay={i * 0.5}
        x={Math.random() * 100 - 50}
        y={Math.random() * 100 - 50}
        size={40 + Math.random() * 60}
        color={iconData.color}
      />
    );
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950">
      <div className="absolute inset-0 opacity-30">
        {floatingIcons}
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </div>
  );
}
