import { MainPage, UnderConstruction } from '../components';
import {
  Flex,
  TabList,
  TabPanel,
  Tabs,
  Tab,
  TabPanels,
} from '@chakra-ui/react';

const selectedTabStyle = {
  borderBottom: '5px solid',
  borderBottomColor: '#2cd1a2',
  color: '#2cd1a2',
};

export const Home = () => {
  return (
    <Flex
      bg='#363945'
      boxShadow='rgba(0, 0, 0, 0.25) 0px 2px 4px'
      borderRadius={8}
      pos='relative'
      flexDir='column'
    >
      <Tabs isLazy p={0} pb={5}>
        <TabList>
          <Tab color='white' fontWeight='700' _selected={selectedTabStyle}>
            Portfolio
          </Tab>
          <Tab color='white' fontWeight='700' _selected={selectedTabStyle}>
            Today
          </Tab>
          <Tab color='white' fontWeight='700' _selected={selectedTabStyle}>
            Dividends
          </Tab>
          <Tab color='white' fontWeight='700' _selected={selectedTabStyle}>
            News
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MainPage></MainPage>
          </TabPanel>

          <TabPanel>
            <UnderConstruction />
          </TabPanel>

          <TabPanel>
            <UnderConstruction />
          </TabPanel>

          <TabPanel>
            <UnderConstruction />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
