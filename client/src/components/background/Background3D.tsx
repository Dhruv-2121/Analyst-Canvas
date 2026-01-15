import { motion } from "framer-motion";
import { SiTableau, SiPython, SiMysql, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";
import { FaChartBar, FaFileExcel } from "react-icons/fa";
import { useMemo } from "react";

const FloatingIcon = ({ Icon, delay, x, y, size, color }: { Icon: any, delay: number, x: number, y: number, size: number, color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        rotate: 360,
        y: [0, -15, 0]
      }}
      transition={{ 
        duration: 8 + Math.random() * 5, 
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut" 
      }}
      className="absolute z-0 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <Icon size={size} color={color} className="opacity-40" />
    </motion.div>
  );
};

const ZigZagLine = ({ color, top }: { color: string, top: string }) => {
  return (
    <div className="absolute left-0 right-0 h-px overflow-hidden pointer-events-none" style={{ top }}>
      <svg width="100%" height="20" className="opacity-10">
        <pattern id="zigzag" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 L10 0 L30 20 L40 10" fill="transparent" stroke={color} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="20" fill="url(#zigzag)" />
      </svg>
    </div>
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

  // Triangular pattern positioning
  const triangularIcons = useMemo(() => {
    const points = [
      { x: 20, y: 20 }, { x: 50, y: 15 }, { x: 80, y: 20 },
      { x: 35, y: 45 }, { x: 65, y: 45 },
      { x: 50, y: 75 }
    ];
    return points.map((p, i) => {
      const iconData = icons[i % icons.length];
      return (
        <FloatingIcon
          key={i}
          Icon={iconData.Icon}
          delay={i * 0.4}
          x={p.x}
          y={p.y}
          size={50 + Math.random() * 30}
          color={iconData.color}
        />
      );
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617]">
      <div className="absolute inset-0">
        {triangularIcons}
      </div>
      
      {/* Zig Zag Lines */}
      <ZigZagLine color="#38bdf8" top="25%" />
      <ZigZagLine color="#38bdf8" top="50%" />
      <ZigZagLine color="#38bdf8" top="75%" />

      {/* 3D Animated Mesh/Sphere Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          animate={{ 
            rotateX: 360,
            rotateY: 360,
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] border border-primary/20 rounded-full preserve-3d"
          style={{ transform: "rotateX(45deg) rotateY(45deg)" }}
        >
          <div className="absolute inset-0 border border-primary/10 rounded-full rotate-x-90" />
          <div className="absolute inset-0 border border-primary/10 rounded-full rotate-y-90" />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,rgba(2,6,23,0.8)_100%)]" />
    </div>
  );
}
