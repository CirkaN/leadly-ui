import LeadDetailProfile from "./components/LeadDetailProfile";
import LeadDetailTabs from "./components/LeadDetailTabs";

const LeadDetails = () => {
  return (
    <>
      <div className="bg-gray-200 h-screen dark:bg-black">
        <LeadDetailProfile />
        <LeadDetailTabs />
      </div>
    </>
  );
};
export default LeadDetails;
