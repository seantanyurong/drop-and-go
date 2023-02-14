import Edit from "../components/layout/EditPage/edit";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const params = useParams();

  return (
    <div>
      <Edit params={params} />
    </div>
  );
};

export default EditPage;
