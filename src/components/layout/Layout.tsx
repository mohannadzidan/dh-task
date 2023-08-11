import Stack from "../Stack";
import Sidebar from "../Sidebar";
import Container, { ContainerProps } from "../Container";
import Typography from "../Typography";
import t from "../../locale";
import SettingsIcon from "../icons/SettingsIcon";

export default function Layout({ children, ...props }: ContainerProps) {
  return (
    <Stack minHeight="100vh">
      <Stack direction="row" flex={1}>
        <Sidebar />
        <Container {...props}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
            spacing={2}
          >
            <SettingsIcon size={54} color="secondary" />
          </Stack>
          {children}
        </Container>
      </Stack>
    </Stack>
  );
}
