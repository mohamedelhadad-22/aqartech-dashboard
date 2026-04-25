import { ComplianceRegulationsIcon } from "@/components/icons/ComplianceRegulationsIcon";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { FacilityUtilizationIcon } from "@/components/icons/FacilityUtilizationIcon";
import { RiskManagementIcon } from "@/components/icons/RiskManagementIcon";
import { StrategicPlanningIcon } from "@/components/icons/StrategicPlanningIcon";
import { StaffPerformanceIcon } from "@/components/icons/StaffPerformanceIcon";

const NAV_ITEMS = [
  {
    title: "Overview",
    path: "/",
    icon: HomeIcon,
  },
  {
    title: "facilityUtilization",
    path: "/facilities",
    icon: FacilityUtilizationIcon,
  },
  {
    title: "staffPerformance",
    path: "/staff-performance",
    icon: StaffPerformanceIcon,
  },
  {
    title: "riskManagement",
    path: "/risk-management",
    icon: RiskManagementIcon,
  },
  {
    title: "strategicPlanning",
    path: "/strategic-planning",
    icon: StrategicPlanningIcon,
  },
  {
    title: "complianceRegulations",
    path: "/compliance-regulations",
    icon: ComplianceRegulationsIcon,
  },
];

export default NAV_ITEMS;
