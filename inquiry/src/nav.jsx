import { Tabs } from "antd";

const items = [
  {
    label: `All`,
    key: "all",
  },
  {
    label: `Today`,
    key: "today",
  },
  {
    label: `Week`,
    key: "week",
  },
];
const Nav = ({ onChange }) => {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Nav;
