import { Flex } from "antd";
import BusinessForm from "../components/BusinessForm";
import DetailsBusinessPage from "./DetailsBusinessPage";

function EditBusinessPage() {
  return (
    <Flex>
      <DetailsBusinessPage />
      <BusinessForm />
    </Flex>
  );
}

export default EditBusinessPage;
