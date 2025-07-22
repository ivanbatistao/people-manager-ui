import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPeople } from "@/redux/states";
import { people } from "@/data/people";
import { PeopleTable } from "@/pages/home/components/peopleTable";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(people));
  }, []);

  return <PeopleTable />;
};

export default HomeContainer;
