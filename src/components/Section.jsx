import PropTypes from 'prop-types';

function Section({ children }) {
  return (
    <section className="mb-15 h-full w-full max-w-md mx-auto overflow-x-hidden">
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
