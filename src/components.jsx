/**
 * Hydro-Gen Shared Components
 * Consolidated from multiple component files for optimized file structure
 */

import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

// ============================================
// CITATIONS DATA (APA-7 Format)
// ============================================

export const citations = {
    fuelCellBasics: {
        id: 'doe-fuelcell',
        full: 'U.S. Department of Energy. (2024). Fuel cell basics. Office of Energy Efficiency & Renewable Energy. https://www.energy.gov/eere/fuelcells/fuel-cell-basics',
        inText: '(U.S. Department of Energy, 2024)',
    },
    pemFuelCell: {
        id: 'smithsonian-pem',
        full: 'Smithsonian Institution. (2023). How PEM fuel cells work. National Museum of American History. https://americanhistory.si.edu/fuelcells/pem/pemmain.htm',
        inText: '(Smithsonian Institution, 2023)',
    },
    redoxChemistry: {
        id: 'libretexts-redox',
        full: 'LibreTexts. (2024). Oxidation-reduction reactions. Chemistry LibreTexts. https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/04%3A_Stoichiometry_of_Chemical_Reactions/4.2%3A_Classifying_Chemical_Reactions',
        inText: '(LibreTexts, 2024)',
    },
    boylesLaw: {
        id: 'khan-boyles',
        full: "Khan Academy. (2024). Boyle's law. Khan Academy Chemistry. https://www.khanacademy.org/science/chemistry/gases-and-kinetic-molecular-theory/gas-laws/v/boyles-law",
        inText: '(Khan Academy, 2024)',
    },
    hydrogenStorage: {
        id: 'doe-storage',
        full: 'U.S. Department of Energy. (2024). Hydrogen storage. Office of Energy Efficiency & Renewable Energy. https://www.energy.gov/eere/fuelcells/hydrogen-storage',
        inText: '(U.S. Department of Energy, 2024)',
    },
    manitobaHydro: {
        id: 'mbhydro-green',
        full: 'Manitoba Hydro. (2024). Clean energy and sustainability. Manitoba Hydro. https://www.hydro.mb.ca/environment/clean_energy/',
        inText: '(Manitoba Hydro, 2024)',
    },
    greenHydrogen: {
        id: 'iea-hydrogen',
        full: 'International Energy Agency. (2023). Global hydrogen review 2023. IEA Publications. https://www.iea.org/reports/global-hydrogen-review-2023',
        inText: '(International Energy Agency, 2023)',
    },
    chemicalBonding: {
        id: 'openstax-bonding',
        full: 'OpenStax. (2024). Chemical bonding and molecular geometry. Chemistry 2e. https://openstax.org/books/chemistry-2e/pages/7-introduction',
        inText: '(OpenStax, 2024)',
    },
    kineticTheory: {
        id: 'chem-kmt',
        full: 'Flowers, P., Theopold, K., Langley, R., & Robinson, W. R. (2019). Kinetic-molecular theory. In Chemistry 2e (Chapter 9). OpenStax. https://openstax.org/books/chemistry-2e/pages/9-5-the-kinetic-molecular-theory',
        inText: '(Flowers et al., 2019)',
    },
    coldClimateHydrogen: {
        id: 'nrel-cold',
        full: 'National Renewable Energy Laboratory. (2023). Hydrogen fuel cell vehicles in cold climates. NREL Technical Report. https://www.nrel.gov/hydrogen/fuel-cell-vehicles.html',
        inText: '(National Renewable Energy Laboratory, 2023)',
    },
    platinumCatalyst: {
        id: 'nature-catalyst',
        full: 'Wang, Y., Chen, K. S., Mishler, J., Cho, S. C., & Adroher, X. C. (2011). A review of polymer electrolyte membrane fuel cells: Technology, applications, and needs on fundamental research. Applied Energy, 88(4), 981-1007. https://doi.org/10.1016/j.apenergy.2010.09.030',
        inText: '(Wang et al., 2011)',
    },
}

// Chemical equations with proper subscripts
export const equations = {
    overallReaction: '2H₂(g) + O₂(g) → 2H₂O(l)',
    anodeReaction: '2H₂ → 4H⁺ + 4e⁻',
    cathodeReaction: 'O₂ + 4H⁺ + 4e⁻ → 2H₂O',
    hydrogen: 'H₂',
    oxygen: 'O₂',
    water: 'H₂O',
    boylesLaw: 'P₁V₁ = P₂V₂',
}

// ============================================
// NAVBAR COMPONENT
// ============================================

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/redox-engine', label: 'The Redox Engine' },
    { path: '/gas-lab', label: 'The Gas Lab' },
    { path: '/manitoba-future', label: 'The Manitoba Future' },
]

export function Navbar() {
    return (
        <motion.nav
            className="navbar glass"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 'var(--nav-height)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 3rem',
            }}
        >
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        width: '45px',
                        height: '45px',
                        background: 'linear-gradient(135deg, #00d4ff 0%, #39ff14 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        color: '#050505',
                    }}
                >
                    H₂
                </motion.div>
                <span
                    style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: 700,
                        fontSize: '1.3rem',
                        background: 'linear-gradient(135deg, #00d4ff 0%, #39ff14 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    HYDRO-GEN
                </span>
            </NavLink>

            <div style={{ display: 'flex', gap: '2.5rem' }}>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        style={({ isActive }) => ({
                            fontFamily: 'Orbitron, sans-serif',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: isActive ? '#00d4ff' : '#b0b0b0',
                            textShadow: isActive ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                        })}
                    >
                        {({ isActive }) => (
                            <motion.span whileHover={{ color: '#00d4ff' }} style={{ position: 'relative' }}>
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-8px',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: 'linear-gradient(90deg, #00d4ff, #39ff14)',
                                            borderRadius: '1px',
                                        }}
                                    />
                                )}
                            </motion.span>
                        )}
                    </NavLink>
                ))}
            </div>
        </motion.nav>
    )
}

// ============================================
// PAGE WRAPPER (Framer Motion transitions)
// ============================================

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export function PageWrapper({ children }) {
    return (
        <motion.div className="page-container" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    )
}

// ============================================
// CARD COMPONENT (with hover effect)
// ============================================

const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Card({ children, className = '', delay = 0, style = {} }) {
    return (
        <motion.div
            className={`card ${className}`}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            style={style}
        >
            {children}
        </motion.div>
    )
}

// ============================================
// CHEMICAL EQUATION COMPONENT
// ============================================

export function ChemicalEquation({ equation, showBox = true, size = 'large' }) {
    const fontSize = size === 'large' ? '1.5rem' : size === 'medium' ? '1.2rem' : '1rem'
    return (
        <motion.div
            className={showBox ? 'chemical-equation' : ''}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize, display: 'inline-block', textAlign: 'center' }}
        >
            {equation}
        </motion.div>
    )
}

// ============================================
// CITATIONS COMPONENT
// ============================================

export function getAllCitations() {
    return Object.values(citations).sort((a, b) => a.full.localeCompare(b.full))
}

export function Citations({ showAll = false, citationIds = [] }) {
    const citationsToShow = showAll
        ? getAllCitations()
        : citationIds.map(id => Object.values(citations).find(c => c.id === id)).filter(Boolean)

    if (citationsToShow.length === 0) return null

    return (
        <div className="references-section" style={{ marginTop: '4rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontFamily: 'Orbitron, sans-serif' }}>
                References
            </h3>
            <ul className="references-list">
                {citationsToShow.map((citation, index) => (
                    <li key={index} style={{ paddingLeft: '2rem', textIndent: '-2rem' }}>
                        {citation.full}
                    </li>
                ))}
            </ul>
        </div>
    )
}
