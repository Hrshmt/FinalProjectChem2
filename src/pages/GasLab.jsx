import { motion } from 'framer-motion'
import { PageWrapper, Card, ChemicalEquation, Citations, citations, equations } from '../components'
import PressureCalculator from '../PressureCalculator'

function GasLab() {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="section" style={{ paddingTop: '6rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ color: '#39ff14', fontFamily: 'Orbitron', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Gases, Pressure, and Bonding
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>The Gas Lab</motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', color: '#b0b0b0', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
                        Connect hydrogen fuel cells to gas laws and chemical bonding from Chemistry 30S. Explore how we store hydrogen and understand the energy in chemical bonds.
                    </motion.p>
                </div>
            </section>

            {/* Kinetic Molecular Theory Section */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="section-header">
                            <h2>Kinetic Molecular Theory</h2>
                            <p>Understanding hydrogen as a gas {citations.kineticTheory.inText}</p>
                        </div>

                        <div className="grid-2" style={{ marginTop: '2rem' }}>
                            <Card>
                                <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>🔬</div>
                                <h3 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Why Hydrogen is a Gas</h3>
                                <p style={{ color: '#b0b0b0', lineHeight: '1.8' }}>Hydrogen is a gas at room temperature, meaning its particles are far apart and move rapidly. According to Kinetic Molecular Theory, gas particles:</p>
                                <ul style={{ color: '#b0b0b0', marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '2' }}>
                                    <li>Are in constant, random motion</li>
                                    <li>Have negligible volume compared to container</li>
                                    <li>Experience no intermolecular forces</li>
                                    <li>Collide elastically with walls</li>
                                </ul>
                            </Card>

                            <Card>
                                <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'linear-gradient(135deg, #39ff14 0%, #28cc10 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>⛽</div>
                                <h3 style={{ color: '#39ff14', marginBottom: '1rem' }}>The Storage Challenge</h3>
                                <p style={{ color: '#b0b0b0', lineHeight: '1.8' }}>
                                    To store enough hydrogen for transportation, the gas must be compressed to extremely high pressures—typically around <strong style={{ color: '#39ff14' }}>700 bar</strong> (70,000 kPa) {citations.hydrogenStorage.inText}.
                                </p>
                                <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#111', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Standard H₂ Tank Pressure</div>
                                    <div style={{ fontFamily: 'Orbitron', fontSize: '2rem', fontWeight: 700, color: '#39ff14' }}>700 bar</div>
                                    <div style={{ color: '#707070', fontSize: '0.85rem' }}>(≈ 10,000 psi)</div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Boyle's Law & Calculator Section */}
            <section className="section">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="section-header">
                        <h2>Boyle's Law in Action</h2>
                        <p>Calculate the pressure needed to store hydrogen {citations.boylesLaw.inText}</p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: '#0d0d0d', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(0, 212, 255, 0.2)', marginBottom: '3rem', textAlign: 'center' }}>
                        <h3 style={{ color: '#00d4ff', marginBottom: '1rem' }}>The Relationship Between Pressure and Volume</h3>
                        <p style={{ color: '#b0b0b0', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
                            Boyle's Law states that for a fixed amount of gas at constant temperature, pressure and volume are inversely proportional. When you compress a gas into a smaller volume, the pressure increases.
                        </p>
                        <ChemicalEquation equation={equations.boylesLaw} />
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '0.25rem' }}>P₁ = Initial Pressure</div><div style={{ color: '#00d4ff', fontWeight: 600 }}>at STP: 101.325 kPa</div></div>
                            <div style={{ textAlign: 'center' }}><div style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '0.25rem' }}>V₁ = Initial Volume</div><div style={{ color: '#00d4ff', fontWeight: 600 }}>your input (L)</div></div>
                            <div style={{ textAlign: 'center' }}><div style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '0.25rem' }}>P₂ = Final Pressure</div><div style={{ color: '#39ff14', fontWeight: 600 }}>to calculate</div></div>
                            <div style={{ textAlign: 'center' }}><div style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '0.25rem' }}>V₂ = Tank Volume</div><div style={{ color: '#39ff14', fontWeight: 600 }}>125 L (standard)</div></div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <PressureCalculator />
                    </motion.div>
                </div>
            </section>

            {/* Chemical Bonding Section */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="section-header">
                        <h2>Chemical Bonding</h2>
                        <p>Where the energy comes from {citations.chemicalBonding.inText}</p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div style={{ background: '#0d0d0d', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(0, 212, 255, 0.2)', marginBottom: '2rem' }}>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#b0b0b0', marginBottom: '2rem' }}>
                                Hydrogen (H₂) and oxygen (O₂) are both <strong style={{ color: '#00d4ff' }}>non-polar diatomic molecules</strong> held together by <strong style={{ color: '#39ff14' }}>covalent bonds</strong>. These bonds store chemical potential energy.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'Orbitron', fontSize: '1.5rem', color: '#00d4ff', marginBottom: '0.5rem' }}>H—H</div>
                                    <div style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Bond Energy</div>
                                    <div style={{ color: '#ff6b6b', fontWeight: 600 }}>+436 kJ/mol</div>
                                    <div style={{ color: '#707070', fontSize: '0.8rem', marginTop: '0.25rem' }}>(energy to break)</div>
                                </div>
                                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'Orbitron', fontSize: '1.5rem', color: '#39ff14', marginBottom: '0.5rem' }}>O=O</div>
                                    <div style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Bond Energy</div>
                                    <div style={{ color: '#ff6b6b', fontWeight: 600 }}>+498 kJ/mol</div>
                                    <div style={{ color: '#707070', fontSize: '0.8rem', marginTop: '0.25rem' }}>(energy to break)</div>
                                </div>
                                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'Orbitron', fontSize: '1.5rem', color: '#ffd93d', marginBottom: '0.5rem' }}>O—H</div>
                                    <div style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Bond Energy</div>
                                    <div style={{ color: '#39ff14', fontWeight: 600 }}>-463 kJ/mol</div>
                                    <div style={{ color: '#707070', fontSize: '0.8rem', marginTop: '0.25rem' }}>(energy released)</div>
                                </div>
                            </div>

                            <div style={{ background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)', padding: '1.5rem', borderRadius: '12px', border: '2px solid #39ff14' }}>
                                <h4 style={{ color: '#39ff14', fontFamily: 'Orbitron', marginBottom: '0.75rem' }}>💡 Key Insight</h4>
                                <p style={{ color: '#fff', margin: 0, lineHeight: '1.8' }}>
                                    Breaking the H–H and O=O bonds requires energy, but forming new O–H bonds in water releases <strong>even more energy</strong>. This difference in energy is what powers the fuel cell and starts the entire energy cycle.
                                </p>
                            </div>
                        </div>

                        <div className="grid-3">
                            {[
                                { symbol: 'H₂', name: 'Hydrogen', desc: 'Diatomic molecule', details: 'Non-polar covalent bond\nMolar mass: 2.016 g/mol', color: '#00d4ff' },
                                { symbol: 'O₂', name: 'Oxygen', desc: 'Diatomic molecule', details: 'Double covalent bond (O=O)\nMolar mass: 32.00 g/mol', color: '#39ff14' },
                                { symbol: 'H₂O', name: 'Water', desc: 'The only by-product', details: 'Polar covalent bonds (O–H)\nMolar mass: 18.02 g/mol', color: '#ffd93d' },
                            ].map((mol, i) => (
                                <Card key={i}>
                                    <div style={{ textAlign: 'center' }}>
                                        <motion.div animate={{ rotate: i < 2 ? [0, 360] : undefined, scale: i === 2 ? [1, 1.1, 1] : undefined }} transition={{ duration: i === 2 ? 2 : 20, repeat: Infinity, ease: i === 2 ? 'easeInOut' : 'linear' }} style={{ width: '80px', height: '80px', margin: '0 auto 1rem', background: `radial-gradient(circle, ${mol.color} 30%, transparent 70%)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Orbitron', fontSize: '1.3rem', color: '#050505', fontWeight: 700 }}>{mol.symbol}</motion.div>
                                        <h3 style={{ color: mol.color, marginBottom: '0.5rem' }}>{mol.name}</h3>
                                        <p style={{ color: '#707070', fontSize: '0.9rem', marginBottom: '1rem' }}>{mol.desc}</p>
                                        <div style={{ color: '#b0b0b0', fontSize: '0.9rem', whiteSpace: 'pre-line' }}>{mol.details}</div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* References */}
            <section className="section">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <Citations citationIds={['chem-kmt', 'khan-boyles', 'doe-storage', 'openstax-bonding']} />
                </div>
            </section>
        </PageWrapper>
    )
}

export default GasLab
