import { MoonIcon } from 'src/assets/icons/Moon';
import { SunIcon } from 'src/assets/icons/Sun';
import { useTheme } from 'src/context/theme';
import { ETheme } from 'src/context/theme/model';

const LightDarkMode = () => {
  const { setCurrentTheme } = useTheme();
  return (
    <div>
      <SunIcon
        width={50}
        height={50}
        onClick={() => {
          console.log('light');
          setCurrentTheme(ETheme.LIGHT);
        }}
      />
      <MoonIcon
        width={50}
        height={50}
        onClick={() => {
          console.log('dark');

          setCurrentTheme(ETheme.DARK);
        }}
      />
    </div>
  );
};

export default LightDarkMode;
