import SvgIcons from "../assets/SvgIcons";
import { colors } from "../assets/colors";

export const getIcon = (iconName, isInclude) => {
    switch (iconName) {
      case 'Aerobics':
        return (
          <SvgIcons.Aerobics fill={isInclude ? colors.white : colors.blue} />
        );
      case 'Box':
        return <SvgIcons.Box fill={isInclude ? colors.white : colors.blue} />;
      case 'Children':
        return (
          <SvgIcons.Children fill={isInclude ? colors.white : colors.blue} />
        );
      case 'Dances':
        return (
          <SvgIcons.Dances fill={isInclude ? colors.white : colors.blue} />
        );
      case 'Run':
        return <SvgIcons.Run fill={isInclude ? colors.white : colors.blue} />;
      case 'Wrestling':
        return (
          <SvgIcons.Wrestling fill={isInclude ? colors.white : colors.blue} />
        );

      default:
        break;
    }
  };