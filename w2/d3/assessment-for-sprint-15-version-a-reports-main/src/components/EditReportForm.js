import { useParams } from 'react-router-dom';
import ReportForm from './ReportForm';
import { useDispatch, useSelector } from 'react-redux';


const EditReportForm = () => {

  const state = useSelector(state => state.reports);

  const { reportId } = useParams();
  const report = {...state[reportId]};



  return (
    <ReportForm report={report} formType="Update Report" />
  );
}

export default EditReportForm;
