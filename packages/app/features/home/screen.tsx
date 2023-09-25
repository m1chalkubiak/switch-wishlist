import { useSx } from 'dripsy';
import { TextLink } from 'solito/link';

import { View } from 'app/ui/view';

export const HomeScreen = () => {
  const sx = useSx();

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}>
      <TextLink
        href="/user/michal"
        textProps={{
          style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
        }}
      >
        User details link
      </TextLink>
    </View>
  );
};
