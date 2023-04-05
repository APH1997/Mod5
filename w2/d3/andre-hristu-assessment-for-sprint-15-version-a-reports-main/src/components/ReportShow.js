import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReportShow = () => {
  const state = useSelector(state => state.reports);
  
  const { reportId } = useParams();
  const report = {...state[reportId]};

  return (
    <section>
      ID: {report.id}
      <br/>
      Understanding: {report.understanding}
      <br/>
      Improvement: {report.improvement}
      <br/>
      <Link to="/">Back to Report Index</Link>
    </section>
  );
}

export default ReportShow;
