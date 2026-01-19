import { motion } from 'framer-motion'
import { PageWrapper, Card, ChemicalEquation, Citations, citations, equations } from '../components'
import FuelCellDiagram from '../FuelCellDiagram'

function RedoxEngine() {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="section" style={{ paddingTop: '6rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ color: '#39ff14', fontFamily: 'Orbitron', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Chemical Reactions Inside a Fuel Cell
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>The Redox Engine</motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', color: '#b0b0b0', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
                        Explore the oxidation and reduction reactions that power hydrogen fuel cells. Click on the diagram components to discover the chemistry at work.
                    </motion.p>
                </div>
            </section>

            {/* Interactive Fuel Cell Diagram */}
            <section className="section" style={{ background: '#0a0a0a', paddingTop: '3rem', paddingBottom: '4rem' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <FuelCellDiagram />
                </motion.div>
            </section>

            {/* Redox Explanation */}
            <section className="section">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="section-header">
                        <h2>Understanding Redox Reactions</h2>
                        <p>Oxidation and reduction always happen together in a redox reaction {citations.redoxChemistry.inText}</p>
                    </div>

                    <div className="grid-2" style={{ marginTop: '3rem' }}>
                        {/* Oxidation Card */}
                        <Card>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>⚡</div>
                                <div>
                                    <h3 style={{ color: '#00d4ff', marginBottom: '0.25rem' }}>At the Anode</h3>
                                    <span style={{ color: '#39ff14', fontFamily: 'Orbitron', fontSize: '0.85rem', letterSpacing: '0.1em' }}>OXIDATION</span>
                                </div>
                            </div>
                            <div style={{ background: '#111', padding: '1rem', borderRadius: '8px', textAlign: 'center', marginBottom: '1.5rem', fontFamily: 'monospace', fontSize: '1.3rem', color: '#00d4ff' }}>{equations.anodeReaction}</div>
                            <p style={{ color: '#b0b0b0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                Hydrogen gas enters the anode, where a platinum catalyst splits each hydrogen molecule into protons and electrons. The hydrogen atoms <strong style={{ color: '#00d4ff' }}>lose electrons</strong>, meaning oxidation occurs at the anode.
                            </p>
                            <div style={{ background: 'rgba(0, 212, 255, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #00d4ff' }}>
                                <strong style={{ color: '#00d4ff' }}>LEO:</strong>
                                <span style={{ color: '#fff', marginLeft: '0.5rem' }}>Loss of Electrons is Oxidation</span>
                            </div>
                        </Card>

                        {/* Reduction Card */}
                        <Card>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'linear-gradient(135deg, #39ff14 0%, #28cc10 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>💧</div>
                                <div>
                                    <h3 style={{ color: '#39ff14', marginBottom: '0.25rem' }}>At the Cathode</h3>
                                    <span style={{ color: '#00d4ff', fontFamily: 'Orbitron', fontSize: '0.85rem', letterSpacing: '0.1em' }}>REDUCTION</span>
                                </div>
                            </div>
                            <div style={{ background: '#111', padding: '1rem', borderRadius: '8px', textAlign: 'center', marginBottom: '1.5rem', fontFamily: 'monospace', fontSize: '1.3rem', color: '#39ff14' }}>{equations.cathodeReaction}</div>
                            <p style={{ color: '#b0b0b0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                Oxygen gas enters the cathode. The electrons that traveled through the external circuit combine with oxygen and protons to form water. Because oxygen <strong style={{ color: '#39ff14' }}>gains electrons</strong>, reduction occurs at the cathode.
                            </p>
                            <div style={{ background: 'rgba(57, 255, 20, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #39ff14' }}>
                                <strong style={{ color: '#39ff14' }}>GER:</strong>
                                <span style={{ color: '#fff', marginLeft: '0.5rem' }}>Gain of Electrons is Reduction</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Platinum Catalyst Section */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                            <div style={{ width: '100px', height: '100px', borderRadius: '20px', background: 'linear-gradient(135deg, #ffd93d 0%, #ff9500 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', flexShrink: 0 }}>⚗️</div>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <h2 style={{ marginBottom: '1.5rem' }}>The Role of the Platinum Catalyst</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                                    The platinum catalyst plays a critical role by <strong style={{ color: '#ffd93d' }}>lowering the activation energy</strong> needed to break the H₂ molecules apart {citations.platinumCatalyst.inText}. Once separated, the protons move through the proton exchange membrane, while the electrons are forced to travel through an external circuit. This movement of electrons is what generates electric current.
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                                    By controlling the path of electrons, the fuel cell converts chemical energy directly into electrical energy with extremely high efficiency and zero harmful emissions {citations.pemFuelCell.inText}.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overall Reaction Summary */}
            <section className="section">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '2rem' }}>The Complete Reaction</h2>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ background: '#0d0d0d', padding: '3rem', borderRadius: '20px', border: '2px solid rgba(0, 212, 255, 0.3)', marginBottom: '2rem' }}>
                        <ChemicalEquation equation={equations.overallReaction} size="large" />
                        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            <div style={{ padding: '1rem', background: '#111', borderRadius: '8px' }}>
                                <div style={{ color: '#00d4ff', fontWeight: 600, marginBottom: '0.5rem' }}>Reactants</div>
                                <div style={{ color: '#b0b0b0' }}>Hydrogen + Oxygen</div>
                            </div>
                            <div style={{ padding: '1rem', background: '#111', borderRadius: '8px' }}>
                                <div style={{ color: '#ffd93d', fontWeight: 600, marginBottom: '0.5rem' }}>Energy Released</div>
                                <div style={{ color: '#b0b0b0' }}>Electricity + Heat</div>
                            </div>
                            <div style={{ padding: '1rem', background: '#111', borderRadius: '8px' }}>
                                <div style={{ color: '#39ff14', fontWeight: 600, marginBottom: '0.5rem' }}>Product</div>
                                <div style={{ color: '#b0b0b0' }}>Pure Water</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* References */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <Citations citationIds={['libretexts-redox', 'smithsonian-pem', 'nature-catalyst', 'doe-fuelcell']} />
                </div>
            </section>
        </PageWrapper>
    )
}

export default RedoxEngine
