import MHOLogo from "../../assets/mhp-logo.jpeg";
import PSMLogo from "../../assets/psm-logo.png";
import Stack from "../Stack";
import SidebarButton from "./SidebarButton";
import t from "../../locale";
import Typography from "../Typography";
import SidebarSection from "./SidebarSection";

export default function Sidebar() {
  return (
    <Stack
      component="nav"
      width="332px"
      height="100%"
      padding={"8px"}
      spacing={1}
      className="Sidebar-root"
      display={{
        xs: "none",
        sm: "none",
        md: "block",
      }}
      style={{ top: 0, position: "sticky" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <img
          src={MHOLogo}
          alt="Ministry of health and population"
          width="100"
        />
        <img
          src={PSMLogo}
          alt="Ministry of health and population"
          width="100"
        />
        <Typography variant="h2" fontWeight={600}>
          {t("home")}
        </Typography>
      </Stack>

      <SidebarSection name={t("births")}>
        <SidebarButton>{t("register_dob")}</SidebarButton>
        <SidebarButton>{t("register_found_dob")}</SidebarButton>
        <SidebarButton>{t("register_dob_without_id")}</SidebarButton>
        <SidebarButton>{t("register_dob_without_id_but_found")}</SidebarButton>
        <SidebarButton>{t("dob_edit_and_inquiry")}</SidebarButton>
        <SidebarButton>{t("request_dob_edit")}</SidebarButton>
      </SidebarSection>
    </Stack>
  );
}
