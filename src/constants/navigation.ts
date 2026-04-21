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
    title: "Facility Utilization",
    path: "/facilities",
    icon: FacilityUtilizationIcon,
  },
  {
    title: "Staff Performance",
    path: "/staff-performance",
    icon: StaffPerformanceIcon,
  },
  {
    title: "Risk Management",
    path: "/risk-management",
    icon: RiskManagementIcon,
  },
  {
    title: "Strategic Planning",
    path: "/strategic-planning",
    icon: StrategicPlanningIcon,
  },
  {
    title: "Compliance & Regulations",
    path: "/compliance-regulations",
    icon: ComplianceRegulationsIcon,
  },
];

export default NAV_ITEMS;
