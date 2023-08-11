import Stack, { StackProps } from "./Stack";
import Typography from "./Typography";
import Box from "./Box";

export interface CharacterPopulationProps extends StackProps {
  name: string;
  percentage: number;
  size: number;
  color: string;
  Character: (props: { percentage: number; size: number }) => any;
}

export default function CharacterPopulation({
  name,
  percentage,
  size,
  Character,
  color,
}: CharacterPopulationProps) {
  return (
    <Stack spacing={1} alignItems="center">
      <Typography variant="h5" fontWeight={600}>
        {name}
      </Typography>
      <Box color={color}>
        <Character percentage={percentage} size={size} />
      </Box>
      <Typography variant="h5" fontWeight="bold">
        {Math.round(percentage * 100)}%
      </Typography>
    </Stack>
  );
}
