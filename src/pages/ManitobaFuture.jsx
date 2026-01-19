import { motion } from 'framer-motion'
import { PageWrapper, Card, Citations, citations } from '../components'

function ManitobaFuture() {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="section" style={{ paddingTop: '6rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ color: '#39ff14', fontFamily: 'Orbitron', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Chemistry in Action
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>The Manitoba Future</motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', color: '#b0b0b0', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
                        Discover how Manitoba's unique geography and renewable energy resources position us as leaders in the global hydrogen economy.
                    </motion.p>
                </div>
            </section>

            {/* Manitoba's Advantage Section */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '350px' }}>
                                <h2 style={{ marginBottom: '1.5rem' }}>Manitoba's Clean Energy Advantage</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#b0b0b0' }}>
                                    Manitoba is uniquely positioned to lead in hydrogen fuel technology because of its abundant <strong style={{ color: '#00d4ff' }}>hydroelectric power</strong>. Hydroelectric energy can be used to split water into hydrogen and oxygen through <strong style={{ color: '#39ff14' }}>electrolysis</strong>, creating what is known as "green hydrogen" {citations.manitobaHydro.inText}.
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#b0b0b0', marginTop: '1.5rem' }}>
                                    Because the electricity comes from renewable sources, the entire hydrogen production process can be <strong style={{ color: '#39ff14' }}>nearly carbon-free</strong> {citations.greenHydrogen.inText}.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
                                    <div style={{ background: '#111', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Orbitron', fontSize: '2rem', fontWeight: 700, color: '#00d4ff' }}>97%</div>
                                        <div style={{ color: '#707070', fontSize: '0.9rem' }}>of Manitoba's electricity is renewable</div>
                                    </div>
                                    <div style={{ background: '#111', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Orbitron', fontSize: '2rem', fontWeight: 700, color: '#39ff14' }}>16</div>
                                        <div style={{ color: '#707070', fontSize: '0.9rem' }}>hydroelectric generating stations</div>
                                    </div>
                                </div>
                            </div>

                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ width: '350px', height: '400px', background: 'linear-gradient(180deg, #0d0d0d 0%, #111 100%)', borderRadius: '20px', border: '2px solid rgba(0, 212, 255, 0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)', top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                                <div style={{ fontSize: '6rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.5))' }}>🍁</div>
                                <div style={{ fontFamily: 'Orbitron', fontSize: '1.5rem', fontWeight: 700, background: 'linear-gradient(135deg, #00d4ff 0%, #39ff14 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>MANITOBA</div>
                                <div style={{ color: '#707070', textAlign: 'center', fontSize: '0.95rem' }}>Canada's Green Hydrogen Hub</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Electrolysis Process */}
            <section className="section">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="section-header">
                        <h2>Green Hydrogen Production</h2>
                        <p>From water and electricity to clean fuel</p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: '#0d0d0d', padding: '3rem', borderRadius: '20px', border: '1px solid rgba(57, 255, 20, 0.2)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                            {[
                                { icon: '💧', label: 'Water', sub: 'H₂O', color: '#00d4ff' },
                                { arrow: true },
                                { icon: '⚡', label: 'Electrolysis', sub: 'Hydroelectric power', color: '#ffd93d' },
                                { arrow: true },
                                { icon: 'H₂', label: 'Green Hydrogen', sub: 'Zero-carbon fuel', color: '#39ff14', isText: true },
                            ].map((item, i) => item.arrow ? (
                                <div key={i} style={{ color: '#39ff14', fontSize: '2rem' }}>→</div>
                            ) : (
                                <div key={i} style={{ textAlign: 'center', flex: '1', minWidth: '120px' }}>
                                    <motion.div animate={item.isText ? { rotate: [0, 360] } : { y: [0, -5, 0], scale: item.icon === '⚡' ? [1, 1.1, 1] : undefined }} transition={{ duration: item.isText ? 10 : 2, repeat: Infinity, ease: item.isText ? 'linear' : undefined }} style={{ width: '80px', height: '80px', margin: '0 auto 1rem', background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}99 100%)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: item.isText ? '1.5rem' : '2rem', fontFamily: item.isText ? 'Orbitron' : undefined, fontWeight: item.isText ? 700 : undefined, color: '#050505' }}>
                                        {item.icon}
                                    </motion.div>
                                    <div style={{ fontWeight: 600, color: item.color }}>{item.label}</div>
                                    <div style={{ color: '#707070', fontSize: '0.9rem' }}>{item.sub}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center', padding: '1.5rem', background: '#111', borderRadius: '12px' }}>
                            <div style={{ color: '#707070', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Electrolysis Reaction</div>
                            <div style={{ fontFamily: 'monospace', fontSize: '1.4rem', color: '#00d4ff' }}>2H₂O(l) + electricity → 2H₂(g) + O₂(g)</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cold Climate Application */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="section-header">
                            <h2>Real-World Application</h2>
                            <p>Why hydrogen makes sense for Manitoba</p>
                        </div>

                        <div className="grid-2">
                            <Card>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>❄️</div>
                                    <h3 style={{ color: '#ff6b6b' }}>The Cold Climate Challenge</h3>
                                </div>
                                <p style={{ color: '#b0b0b0', lineHeight: '1.8' }}>
                                    Battery-electric vehicles struggle in extreme cold and over long distances. Cold temperatures reduce battery capacity by up to 40%, limiting range when drivers need it most.
                                </p>
                                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255, 107, 107, 0.1)', borderRadius: '8px', borderLeft: '4px solid #ff6b6b' }}>
                                    <div style={{ color: '#ff6b6b', fontWeight: 600, marginBottom: '0.5rem' }}>Winnipeg Winter Average</div>
                                    <div style={{ color: '#b0b0b0' }}>-18°C in January • Long-haul distances between cities</div>
                                </div>
                            </Card>

                            <Card>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #39ff14 0%, #28cc10 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🚛</div>
                                    <h3 style={{ color: '#39ff14' }}>The Hydrogen Solution</h3>
                                </div>
                                <p style={{ color: '#b0b0b0', lineHeight: '1.8' }}>
                                    Hydrogen fuel cells maintain performance in extreme cold and allow for fast refueling {citations.coldClimateHydrogen.inText}. This makes hydrogen an ideal solution for Manitoba's transportation and logistics industries.
                                </p>
                                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(57, 255, 20, 0.1)', borderRadius: '8px', borderLeft: '4px solid #39ff14' }}>
                                    <div style={{ color: '#39ff14', fontWeight: 600, marginBottom: '0.5rem' }}>Hydrogen Advantages</div>
                                    <div style={{ color: '#b0b0b0' }}>5-minute refueling • 500+ km range • Cold weather performance</div>
                                </div>
                            </Card>
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <h3 style={{ textAlign: 'center', color: '#00d4ff', marginBottom: '2rem' }}>Potential Applications in Manitoba</h3>
                            <div className="grid-3">
                                {[
                                    { icon: '🚛', title: 'Long-Haul Trucking', desc: 'Winnipeg to Brandon, Thunder Bay, and beyond' },
                                    { icon: '🚌', title: 'Transit Buses', desc: 'Winnipeg Transit fleet conversion' },
                                    { icon: '🚜', title: 'Agricultural Equipment', desc: 'Farm machinery for rural Manitoba' },
                                ].map((item, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: '#111', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                                        <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h4>
                                        <p style={{ color: '#707070', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Significance Section */}
            <section className="section">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(57, 255, 20, 0.05) 100%)', padding: '3rem', borderRadius: '24px', border: '2px solid rgba(0, 212, 255, 0.2)', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🌍</div>
                        <h2 style={{ marginBottom: '1.5rem' }}>The Significance</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#b0b0b0', maxWidth: '750px', margin: '0 auto' }}>
                            The chemistry learned in this unit directly connects to environmental sustainability at a local level. By understanding <strong style={{ color: '#00d4ff' }}>redox reactions</strong>, <strong style={{ color: '#39ff14' }}>gas laws</strong>, and <strong style={{ color: '#ffd93d' }}>bonding</strong>, students can see how chemistry plays a critical role in solving real-world problems and shaping Manitoba's clean-energy future.
                        </p>
                        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#0d0d0d', borderRadius: '12px', display: 'inline-block' }}>
                            <div style={{ fontFamily: 'Orbitron', fontSize: '1.1rem', background: 'linear-gradient(135deg, #00d4ff 0%, #39ff14 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Chemistry 30S → Real-World Impact → Manitoba's Future
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="section" style={{ background: '#0a0a0a', textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Ready to Explore More?</h2>
                    <p style={{ color: '#b0b0b0', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Revisit the chemistry concepts that make hydrogen fuel cells possible.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a href="/redox-engine" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block', padding: '1rem 2rem', background: 'linear-gradient(135deg, #00d4ff 0%, #39ff14 100%)', color: '#050505', fontFamily: 'Orbitron', fontWeight: 600, borderRadius: '8px', textDecoration: 'none' }}>
                            Review Redox Reactions
                        </motion.a>
                        <motion.a href="/gas-lab" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block', padding: '1rem 2rem', background: 'transparent', color: '#00d4ff', fontFamily: 'Orbitron', fontWeight: 600, borderRadius: '8px', border: '2px solid #00d4ff', textDecoration: 'none' }}>
                            Try the Gas Calculator
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            {/* References */}
            <section className="section">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <Citations citationIds={['mbhydro-green', 'iea-hydrogen', 'nrel-cold']} />
                </div>
            </section>
        </PageWrapper>
    )
}

export default ManitobaFuture
