import './TodoFilter.scss';

const Filter = ({ value, onChange }) => (
  <label className="Filter">
    Filter name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
