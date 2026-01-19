import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Hydrogen Pressure Calculator using Boyle's Law
 * P₁V₁ = P₂V₂
 * 
 * STP Conditions:
 * - P₁ = 101.325 kPa (1 atm)
 * - Standard tank volume V₂ = 125 L (for 700-bar tanks)
 * - Target pressure P₂ = 70,000 kPa (700 bar)
 */
function PressureCalculator() {
    const [initialVolume, setInitialVolume] = useState('')
    const [result, setResult] = useState(null)
    const [showSteps, setShowSteps] = useState(false)

    // Constants
    const P1 = 101.325 // kPa at STP
    const V2 = 125 // L (standard 700-bar tank volume)
    const TARGET_PRESSURE = 70000 // kPa (700 bar)

    const calculatePressure = () => {
        const V1 = parseFloat(initialVolume)

        if (isNaN(V1) || V1 <= 0) {
            setResult({ error: 'Please enter a valid positive volume.' })
            return
        }

        // Using Boyle's Law: P₁V₁ = P₂V₂
        // Solving for P₂: P₂ = (P₁ × V₁) / V₂
        const P2 = (P1 * V1) / V2

        // Calculate how this compares to target 700-bar pressure
        const compressionRatio = V1 / V2
        const pressureBar = P2 / 100

        setResult({
            initialVolume: V1,
            initialPressure: P1,
            tankVolume: V2,
            finalPressure: P2,
            finalPressureBar: pressureBar,
            compressionRatio: compressionRatio,
            meetsTarget: P2 >= TARGET_PRESSURE,
        })
        setShowSteps(true)
    }

    const resetCalculator = () => {
        setInitialVolume('')
        setResult(null)
        setShowSteps(false)
    }

    return (
        <div style={{
            background: '#0d0d0d',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            maxWidth: '800px',
            margin: '0 auto',
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{
                    fontFamily: 'Orbitron',
                    fontSize: '1.5rem',
                    color: '#00d4ff',
                    marginBottom: '0.5rem',
                }}>
                    Hydrogen Pressure Calculator
                </h3>
                <p style={{ color: '#707070', fontSize: '0.95rem' }}>
                    Based on Boyle's Law: P₁V₁ = P₂V₂
                </p>
            </div>

            {/* Input Section */}
            <div style={{ marginBottom: '2rem' }}>
                <div style={{
                    background: '#111',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    marginBottom: '1rem',
                }}>
                    <label style={{
                        display: 'block',
                        color: '#b0b0b0',
                        marginBottom: '0.75rem',
                        fontWeight: 500,
                    }}>
                        Initial Volume of H₂ at STP (in Liters):
                    </label>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <input
                            type="number"
                            value={initialVolume}
                            onChange={(e) => setInitialVolume(e.target.value)}
                            placeholder="e.g., 5000"
                            style={{
                                flex: 1,
                                padding: '1rem 1.5rem',
                                background: '#0a0a0a',
                                border: '2px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '8px',
                                color: '#fff',
                                fontSize: '1.1rem',
                                fontFamily: 'Inter',
                            }}
                        />
                        <span style={{ color: '#00d4ff', fontWeight: 600 }}>L</span>
                    </div>
                </div>

                {/* Constants Display */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                }}>
                    <div style={{
                        background: '#111',
                        padding: '1rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                    }}>
                        <div style={{ color: '#707070', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                            Initial Pressure (P₁) at STP
                        </div>
                        <div style={{ color: '#00d4ff', fontWeight: 600, fontSize: '1.1rem' }}>
                            101.325 kPa
                        </div>
                    </div>
                    <div style={{
                        background: '#111',
                        padding: '1rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                    }}>
                        <div style={{ color: '#707070', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                            Tank Volume (V₂)
                        </div>
                        <div style={{ color: '#39ff14', fontWeight: 600, fontSize: '1.1rem' }}>
                            125 L
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <motion.button
                        onClick={calculatePressure}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 2.5rem',
                            background: 'linear-gradient(135deg, #00d4ff 0%, #39ff14 100%)',
                            color: '#050505',
                            fontFamily: 'Orbitron',
                            fontWeight: 600,
                            fontSize: '1rem',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        Calculate Pressure
                    </motion.button>
                    <motion.button
                        onClick={resetCalculator}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'transparent',
                            color: '#b0b0b0',
                            fontFamily: 'Orbitron',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            border: '2px solid #333',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        Reset
                    </motion.button>
                </div>
            </div>

            {/* Results Section */}
            <AnimatePresence>
                {result && !result.error && showSteps && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Step-by-Step Calculation */}
                        <div style={{
                            background: '#0a0a0a',
                            borderRadius: '12px',
                            padding: '2rem',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                        }}>
                            <h4 style={{
                                color: '#00d4ff',
                                fontFamily: 'Orbitron',
                                marginBottom: '1.5rem',
                                fontSize: '1.1rem',
                            }}>
                                📐 Step-by-Step Calculation
                            </h4>

                            {/* Step 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                style={{ marginBottom: '1.5rem' }}
                            >
                                <div style={{
                                    color: '#39ff14',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    STEP 1: Identify Known Values
                                </div>
                                <div style={{
                                    background: '#111',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    fontFamily: 'monospace',
                                    color: '#b0b0b0',
                                    lineHeight: '1.8',
                                }}>
                                    P₁ = {result.initialPressure} kPa (pressure at STP)<br />
                                    V₁ = {result.initialVolume.toLocaleString()} L (initial volume)<br />
                                    V₂ = {result.tankVolume} L (tank volume)<br />
                                    P₂ = ? (pressure to find)
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{ marginBottom: '1.5rem' }}
                            >
                                <div style={{
                                    color: '#39ff14',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    STEP 2: Apply Boyle's Law
                                </div>
                                <div style={{
                                    background: '#111',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    fontFamily: 'monospace',
                                    color: '#b0b0b0',
                                    textAlign: 'center',
                                    fontSize: '1.2rem',
                                }}>
                                    <span style={{ color: '#00d4ff' }}>P₁V₁ = P₂V₂</span>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{ marginBottom: '1.5rem' }}
                            >
                                <div style={{
                                    color: '#39ff14',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    STEP 3: Rearrange to Solve for P₂
                                </div>
                                <div style={{
                                    background: '#111',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    fontFamily: 'monospace',
                                    color: '#b0b0b0',
                                    textAlign: 'center',
                                    fontSize: '1.2rem',
                                }}>
                                    <span style={{ color: '#00d4ff' }}>P₂ = (P₁ × V₁) / V₂</span>
                                </div>
                            </motion.div>

                            {/* Step 4 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                style={{ marginBottom: '1.5rem' }}
                            >
                                <div style={{
                                    color: '#39ff14',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    STEP 4: Substitute Values
                                </div>
                                <div style={{
                                    background: '#111',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    fontFamily: 'monospace',
                                    color: '#b0b0b0',
                                    lineHeight: '2',
                                }}>
                                    P₂ = ({result.initialPressure} kPa × {result.initialVolume.toLocaleString()} L) / {result.tankVolume} L<br />
                                    P₂ = {(result.initialPressure * result.initialVolume).toLocaleString()} kPa·L / {result.tankVolume} L<br />
                                    <span style={{ color: '#00d4ff', fontWeight: 'bold' }}>
                                        P₂ = {result.finalPressure.toLocaleString(undefined, { maximumFractionDigits: 2 })} kPa
                                    </span>
                                </div>
                            </motion.div>

                            {/* Step 5 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div style={{
                                    color: '#39ff14',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    STEP 5: Convert to Bar (optional)
                                </div>
                                <div style={{
                                    background: '#111',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    fontFamily: 'monospace',
                                    color: '#b0b0b0',
                                }}>
                                    1 bar = 100 kPa<br />
                                    P₂ = {result.finalPressure.toLocaleString(undefined, { maximumFractionDigits: 2 })} kPa ÷ 100 = {' '}
                                    <span style={{ color: '#39ff14', fontWeight: 'bold' }}>
                                        {result.finalPressureBar.toLocaleString(undefined, { maximumFractionDigits: 2 })} bar
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Final Result Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            style={{
                                background: result.meetsTarget
                                    ? 'linear-gradient(135deg, rgba(57, 255, 20, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)'
                                    : 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 217, 61, 0.1) 100%)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                border: `2px solid ${result.meetsTarget ? '#39ff14' : '#ffd93d'}`,
                                textAlign: 'center',
                            }}
                        >
                            <div style={{
                                color: '#fff',
                                marginBottom: '0.5rem',
                                fontSize: '1rem',
                            }}>
                                Required Pressure to Store {result.initialVolume.toLocaleString()} L of H₂:
                            </div>
                            <div style={{
                                fontFamily: 'Orbitron',
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                background: result.meetsTarget
                                    ? 'linear-gradient(135deg, #00d4ff 0%, #39ff14 100%)'
                                    : 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                {result.finalPressureBar.toLocaleString(undefined, { maximumFractionDigits: 1 })} bar
                            </div>
                            <div style={{
                                color: '#707070',
                                marginTop: '0.5rem',
                                fontSize: '0.9rem',
                            }}>
                                ({result.finalPressure.toLocaleString(undefined, { maximumFractionDigits: 0 })} kPa) •
                                Compression ratio: {result.compressionRatio.toFixed(1)}:1
                            </div>

                            {result.meetsTarget ? (
                                <div style={{
                                    marginTop: '1rem',
                                    color: '#39ff14',
                                    fontWeight: 500,
                                }}>
                                    ✓ Meets or exceeds standard 700-bar tank requirement
                                </div>
                            ) : (
                                <div style={{
                                    marginTop: '1rem',
                                    color: '#ffd93d',
                                    fontWeight: 500,
                                }}>
                                    ⚠ Below standard 700-bar tank requirement (need more H₂ gas)
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}

                {result && result.error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            background: 'rgba(255, 107, 107, 0.1)',
                            border: '2px solid #ff6b6b',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            textAlign: 'center',
                            color: '#ff6b6b',
                        }}
                    >
                        {result.error}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default PressureCalculator
