import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {

    return (<section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        {stats && <ul className={css.statList}>
            {stats.map(stat => {
                const colorItem = {
                    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`,
                };
                return (<li className={css.item} style={colorItem} key={stat.id}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
                )
            })}
        </ul>}
    </section>);
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
    ),
};

export default Statistics;