import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Interactive PEM Fuel Cell Diagram
 * Click on Anode or Cathode to see half-reactions
 */
function FuelCellDiagram() {
    const [selectedComponent, setSelectedComponent] = useState(null)
    const [hoveredComponent, setHoveredComponent] = useState(null)

    const componentInfo = {
        anode: {
            title: 'Anode — Oxidation (LEO)',
            reaction: '2H₂ → 4H⁺ + 4e⁻',
            description: 'Hydrogen gas enters the anode, where a platinum catalyst splits each hydrogen molecule into protons (H⁺) and electrons (e⁻). The hydrogen atoms lose electrons, meaning oxidation occurs at the anode.',
            mnemonic: 'LEO: Loss of Electrons is Oxidation',
            color: '#00d4ff',
        },
        cathode: {
            title: 'Cathode — Reduction (GER)',
            reaction: 'O₂ + 4H⁺ + 4e⁻ → 2H₂O',
            description: 'Oxygen gas enters the cathode. The electrons that traveled through the external circuit combine with oxygen and protons to form water. Because oxygen gains electrons, reduction occurs at the cathode.',
            mnemonic: 'GER: Gain of Electrons is Reduction',
            color: '#39ff14',
        },
        membrane: {
            title: 'Proton Exchange Membrane (PEM)',
            reaction: 'H⁺ ions pass through',
            description: 'The PEM allows only protons (H⁺) to pass through while blocking electrons. This forces electrons to travel through the external circuit, creating an electric current.',
            mnemonic: 'Selective barrier for protons only',
            color: '#ff6b6b',
        },
        circuit: {
            title: 'External Circuit',
            reaction: 'e⁻ flow → Electric Current',
            description: 'Electrons flow from the anode to the cathode through the external circuit. This movement of electrons is what generates usable electrical energy to power devices, motors, or vehicles.',
            mnemonic: 'Electron highway = Power generation',
            color: '#ffd93d',
        },
    }

    const handleClick = (component) => {
        setSelectedComponent(selectedComponent === component ? null : component)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
        }}>
            {/* Instruction */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    color: '#b0b0b0',
                    textAlign: 'center',
                    fontSize: '1.1rem',
                }}
            >
                Click on any component to explore the chemistry
            </motion.p>

            {/* SVG Diagram */}
            <div style={{ position: 'relative' }}>
                <svg
                    viewBox="0 0 800 500"
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: 'auto',
                        filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.2))',
                    }}
                >
                    <defs>
                        {/* Gradients */}
                        <linearGradient id="anodeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.4" />
                        </linearGradient>
                        <linearGradient id="cathodeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#39ff14" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#39ff14" stopOpacity="0.8" />
                        </linearGradient>
                        <linearGradient id="membraneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.3" />
                        </linearGradient>

                        {/* Glow filter */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Arrow marker */}
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#ffd93d" />
                        </marker>
                    </defs>

                    {/* Background */}
                    <rect x="0" y="0" width="800" height="500" fill="#0a0a0a" rx="20" />

                    {/* Fuel Cell Container */}
                    <rect x="100" y="80" width="600" height="340" fill="none" stroke="#333" strokeWidth="2" rx="10" />

                    {/* ANODE (Left side) */}
                    <motion.g
                        onClick={() => handleClick('anode')}
                        onMouseEnter={() => setHoveredComponent('anode')}
                        onMouseLeave={() => setHoveredComponent(null)}
                        style={{ cursor: 'pointer' }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <rect
                            x="120"
                            y="100"
                            width="150"
                            height="300"
                            fill="url(#anodeGrad)"
                            stroke={selectedComponent === 'anode' || hoveredComponent === 'anode' ? '#00d4ff' : '#00d4ff50'}
                            strokeWidth={selectedComponent === 'anode' ? '4' : '2'}
                            rx="8"
                            filter={hoveredComponent === 'anode' ? 'url(#glow)' : 'none'}
                        />
                        <text x="195" y="260" textAnchor="middle" fill="#fff" fontFamily="Orbitron" fontWeight="bold" fontSize="18">
                            ANODE
                        </text>
                        <text x="195" y="285" textAnchor="middle" fill="#00d4ff" fontFamily="Inter" fontSize="12">
                            (Oxidation)
                        </text>

                        {/* H2 input arrow */}
                        <text x="60" y="180" fill="#00d4ff" fontFamily="Inter" fontWeight="bold" fontSize="16">H₂</text>
                        <line x1="90" y1="200" x2="110" y2="200" stroke="#00d4ff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    </motion.g>

                    {/* MEMBRANE (Center) */}
                    <motion.g
                        onClick={() => handleClick('membrane')}
                        onMouseEnter={() => setHoveredComponent('membrane')}
                        onMouseLeave={() => setHoveredComponent(null)}
                        style={{ cursor: 'pointer' }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <rect
                            x="350"
                            y="100"
                            width="100"
                            height="300"
                            fill="url(#membraneGrad)"
                            stroke={selectedComponent === 'membrane' || hoveredComponent === 'membrane' ? '#ff6b6b' : '#ff6b6b50'}
                            strokeWidth={selectedComponent === 'membrane' ? '4' : '2'}
                            rx="8"
                            filter={hoveredComponent === 'membrane' ? 'url(#glow)' : 'none'}
                        />
                        <text x="400" y="240" textAnchor="middle" fill="#fff" fontFamily="Orbitron" fontWeight="bold" fontSize="12">
                            PEM
                        </text>
                        <text x="400" y="260" textAnchor="middle" fill="#ff6b6b" fontFamily="Inter" fontSize="10">
                            (Membrane)
                        </text>

                        {/* Proton flow arrows */}
                        {[150, 200, 250, 300, 350].map((y, i) => (
                            <g key={i}>
                                <motion.circle
                                    cx="320"
                                    cy={y}
                                    r="8"
                                    fill="#00d4ff"
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 60, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.text
                                    x="320"
                                    y={y + 4}
                                    textAnchor="middle"
                                    fill="#050505"
                                    fontSize="10"
                                    fontWeight="bold"
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 60, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    H⁺
                                </motion.text>
                            </g>
                        ))}
                    </motion.g>

                    {/* CATHODE (Right side) */}
                    <motion.g
                        onClick={() => handleClick('cathode')}
                        onMouseEnter={() => setHoveredComponent('cathode')}
                        onMouseLeave={() => setHoveredComponent(null)}
                        style={{ cursor: 'pointer' }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <rect
                            x="530"
                            y="100"
                            width="150"
                            height="300"
                            fill="url(#cathodeGrad)"
                            stroke={selectedComponent === 'cathode' || hoveredComponent === 'cathode' ? '#39ff14' : '#39ff1450'}
                            strokeWidth={selectedComponent === 'cathode' ? '4' : '2'}
                            rx="8"
                            filter={hoveredComponent === 'cathode' ? 'url(#glow)' : 'none'}
                        />
                        <text x="605" y="260" textAnchor="middle" fill="#fff" fontFamily="Orbitron" fontWeight="bold" fontSize="18">
                            CATHODE
                        </text>
                        <text x="605" y="285" textAnchor="middle" fill="#39ff14" fontFamily="Inter" fontSize="12">
                            (Reduction)
                        </text>

                        {/* O2 input arrow */}
                        <text x="720" y="180" fill="#39ff14" fontFamily="Inter" fontWeight="bold" fontSize="16">O₂</text>
                        <line x1="690" y1="200" x2="710" y2="200" stroke="#39ff14" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* H2O output */}
                        <text x="720" y="350" fill="#39ff14" fontFamily="Inter" fontWeight="bold" fontSize="16">H₂O</text>
                        <line x1="690" y1="330" x2="710" y2="330" stroke="#39ff14" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    </motion.g>

                    {/* EXTERNAL CIRCUIT (Top) */}
                    <motion.g
                        onClick={() => handleClick('circuit')}
                        onMouseEnter={() => setHoveredComponent('circuit')}
                        onMouseLeave={() => setHoveredComponent(null)}
                        style={{ cursor: 'pointer' }}
                    >
                        {/* Circuit path */}
                        <path
                            d="M 195 100 L 195 50 L 605 50 L 605 100"
                            fill="none"
                            stroke={selectedComponent === 'circuit' || hoveredComponent === 'circuit' ? '#ffd93d' : '#ffd93d80'}
                            strokeWidth={selectedComponent === 'circuit' ? '4' : '3'}
                            strokeDasharray="10 5"
                            filter={hoveredComponent === 'circuit' ? 'url(#glow)' : 'none'}
                        />

                        {/* Light bulb / Load */}
                        <circle cx="400" cy="50" r="20" fill="#0a0a0a" stroke="#ffd93d" strokeWidth="2" />
                        <text x="400" y="55" textAnchor="middle" fill="#ffd93d" fontSize="20">⚡</text>

                        {/* Electron flow indicators */}
                        {[250, 350, 450, 550].map((x, i) => (
                            <motion.g key={i}>
                                <motion.circle
                                    cx={x}
                                    cy="50"
                                    r="6"
                                    fill="#ffd93d"
                                    initial={{ opacity: 0.3 }}
                                    animate={{
                                        opacity: [0.3, 1, 0.3],
                                        x: [0, 30, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                />
                                <motion.text
                                    x={x}
                                    y="54"
                                    textAnchor="middle"
                                    fill="#050505"
                                    fontSize="8"
                                    fontWeight="bold"
                                    initial={{ opacity: 0.3 }}
                                    animate={{
                                        opacity: [0.3, 1, 0.3],
                                        x: [0, 30, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                >
                                    e⁻
                                </motion.text>
                            </motion.g>
                        ))}

                        <text x="400" y="25" textAnchor="middle" fill="#ffd93d" fontFamily="Orbitron" fontSize="12">
                            EXTERNAL CIRCUIT
                        </text>
                    </motion.g>

                    {/* Labels */}
                    <text x="400" y="470" textAnchor="middle" fill="#707070" fontFamily="Inter" fontSize="14">
                        Click any component to learn more
                    </text>
                </svg>
            </div>

            {/* Info Panel */}
            <AnimatePresence mode="wait">
                {selectedComponent && componentInfo[selectedComponent] && (
                    <motion.div
                        key={selectedComponent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: '#0d0d0d',
                            border: `2px solid ${componentInfo[selectedComponent].color}`,
                            borderRadius: '16px',
                            padding: '2rem',
                            maxWidth: '700px',
                            width: '100%',
                            boxShadow: `0 0 30px ${componentInfo[selectedComponent].color}30`,
                        }}
                    >
                        <h3 style={{
                            color: componentInfo[selectedComponent].color,
                            fontFamily: 'Orbitron',
                            fontSize: '1.4rem',
                            marginBottom: '1rem',
                        }}>
                            {componentInfo[selectedComponent].title}
                        </h3>

                        <div style={{
                            background: '#111',
                            padding: '1rem 1.5rem',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            fontFamily: 'monospace',
                            fontSize: '1.3rem',
                            color: '#fff',
                            textAlign: 'center',
                        }}>
                            {componentInfo[selectedComponent].reaction}
                        </div>

                        <p style={{
                            color: '#b0b0b0',
                            lineHeight: '1.8',
                            marginBottom: '1rem',
                        }}>
                            {componentInfo[selectedComponent].description}
                        </p>

                        <div style={{
                            background: `${componentInfo[selectedComponent].color}20`,
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            borderLeft: `4px solid ${componentInfo[selectedComponent].color}`,
                        }}>
                            <strong style={{ color: componentInfo[selectedComponent].color }}>
                                Remember:
                            </strong>
                            <span style={{ color: '#fff', marginLeft: '0.5rem' }}>
                                {componentInfo[selectedComponent].mnemonic}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FuelCellDiagram
