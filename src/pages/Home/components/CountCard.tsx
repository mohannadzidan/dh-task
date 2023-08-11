import { useMemo } from "react";
import Card, { CardProps } from "../../../components/Card";
import Typography from "../../../components/Typography";
import Stack from "../../../components/Stack";

export default function CountCard({
  count,
  name,
  icon,
  ...props
}: CardProps & {
  count: number;
  name: string;
  icon?: any;
}) {
  const csc = useMemo(() => {
    const segments = [];
    let c = Math.floor(count);
    while (c > 0) {
      segments.push(c % 1000);
      c = Math.floor(c / 1000);
    }
    return segments.reverse().join(",");
  }, [count]);
  return (
    <Card {...props}>
      <Stack direction="row" alignItems="center" spacing={1}>
        {icon}
        <Stack alignItems="center" flex={1} spacing={1}>
          <Typography
            variant="h2"
            fontWeight={600}
            fontFamily="Poppins"
            color="#000"
            marginBottom={3}
          >
            {csc}
          </Typography>
          <Typography variant="p" fontSize={16} color="secondary">
            {name}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
