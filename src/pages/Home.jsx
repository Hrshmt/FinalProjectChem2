import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PageWrapper, Card, ChemicalEquation, Citations, citations, equations } from '../components'

function Home() {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="hero">
                {/* Animated Background Elements */}
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                    {/* Floating H2 molecules */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            style={{
                                position: 'absolute',
                                left: `${15 + i * 15}%`,
                                top: `${20 + (i % 3) * 25}%`,
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'Orbitron',
                                fontSize: '1rem',
                                color: 'rgba(0, 212, 255, 0.4)',
                            }}
                            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                        >
                            H₂
                        </motion.div>
                    ))}
                </div>

                <div className="hero-content">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#39ff14', fontFamily: 'Orbitron', fontSize: '1rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}
                    >
                        Grade 11 Chemistry • Manitoba 30S
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{ marginBottom: '0.5rem' }}
                    >
                        The Zero-Emission Roadmap
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{ fontSize: '1.3rem', color: '#b0b0b0', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}
                    >
                        Discover how hydrogen fuel cells are powering the future of clean transportation—one chemical reaction at a time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Link to="/redox-engine">
                            <motion.button className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Explore the Chemistry →
                            </motion.button>
                        </Link>
                        <Link to="/manitoba-future">
                            <motion.button className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Manitoba's Future
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>The Vision</h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>
                            Hydrogen fuel cells represent one of the most promising solutions for clean transportation in a world facing climate change. Instead of burning fossil fuels, fuel cells convert chemical energy directly into electrical energy, producing nothing but water as a by-product. This makes hydrogen a powerful candidate for reducing greenhouse gas emissions while still meeting the world's growing energy demands {citations.fuelCellBasics.inText}.
                        </p>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>
                            By understanding the chemistry behind hydrogen fuel cells, we can see how simple reactions at the atomic level can power vehicles, cities, and industries without releasing carbon dioxide into the atmosphere {citations.greenHydrogen.inText}.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Chemistry Hook Section */}
            <section className="section">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '1rem' }}>The Chemistry Hook</h2>
                    <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem' }}>At the core of a hydrogen fuel cell is a redox reaction:</p>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ marginBottom: '2rem' }}>
                        <ChemicalEquation equation={equations.overallReaction} />
                    </motion.div>
                    <p style={{ fontSize: '1.1rem', color: '#b0b0b0' }}>
                        This single reaction explains how chemical bonds are broken and formed to release usable energy {citations.redoxChemistry.inText}.
                    </p>
                </motion.div>
            </section>

            {/* Feature Cards */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div className="section-header">
                    <h2>Explore the Science</h2>
                    <p>Dive into the chemistry that powers the hydrogen revolution</p>
                </div>
                <div className="grid-3">
                    <Card delay={0}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                        <h3 style={{ marginBottom: '1rem', color: '#00d4ff' }}>The Redox Engine</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Discover oxidation and reduction reactions inside a PEM fuel cell with our interactive diagram.</p>
                        <Link to="/redox-engine" style={{ color: '#39ff14', fontWeight: 600, fontFamily: 'Orbitron', fontSize: '0.9rem' }}>Learn More →</Link>
                    </Card>
                    <Card delay={0.1}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧪</div>
                        <h3 style={{ marginBottom: '1rem', color: '#00d4ff' }}>The Gas Lab</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Explore gas laws, Boyle's Law calculations, and chemical bonding in hydrogen storage.</p>
                        <Link to="/gas-lab" style={{ color: '#39ff14', fontWeight: 600, fontFamily: 'Orbitron', fontSize: '0.9rem' }}>Calculate Pressures →</Link>
                    </Card>
                    <Card delay={0.2}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍁</div>
                        <h3 style={{ marginBottom: '1rem', color: '#00d4ff' }}>The Manitoba Future</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>See how Manitoba's hydroelectric power positions us as leaders in green hydrogen production.</p>
                        <Link to="/manitoba-future" style={{ color: '#39ff14', fontWeight: 600, fontFamily: 'Orbitron', fontSize: '0.9rem' }}>Explore Manitoba →</Link>
                    </Card>
                </div>
            </section>

            {/* Key Stats Section */}
            <section className="section">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                    {[
                        { value: '0', label: 'Carbon Emissions', unit: 'g CO₂/km' },
                        { value: '2H₂O', label: 'Only By-Product', unit: 'water' },
                        { value: '60%', label: 'Efficiency Rate', unit: 'vs 20% ICE' },
                        { value: '700', label: 'Storage Pressure', unit: 'bar' },
                    ].map((stat, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <div style={{ fontFamily: 'Orbitron', fontSize: '2.5rem', fontWeight: 700, background: 'linear-gradient(135deg, #00d4ff 0%, #39ff14 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>{stat.value}</div>
                            <div style={{ color: '#fff', fontWeight: 600, marginBottom: '0.25rem' }}>{stat.label}</div>
                            <div style={{ color: '#707070', fontSize: '0.9rem' }}>{stat.unit}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* References */}
            <section className="section" style={{ background: '#0a0a0a' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <Citations citationIds={['doe-fuelcell', 'iea-hydrogen', 'libretexts-redox']} />
                </div>
            </section>
        </PageWrapper>
    )
}

export default Home
