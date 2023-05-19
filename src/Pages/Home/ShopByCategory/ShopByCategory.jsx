import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCategoryToy from "./SingleCategoryToy";
import Spinner from "../../../component/spinner";
import { useNavigation } from "react-router-dom";

const ShopByCategory = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("Marvel");
  const [categoryToys, setCategoryToys] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5000/action_figure/${category}`)
    .then((res) => res.json())
    .then((data) =>{ 
      if (navigation.state === "loading") {
        return <Spinner></Spinner>;
      }
    setCategoryToys(data)
  });
  }, [category, navigation.state]);


  return (
    <div className="mx-2 md:mx-0">
      <h1 className="font-bold font-bangers text-5xl pb-10 text-center">
        shop by category
      </h1>
      <Tabs>
        <TabList className="text-center border-b font-archivo text-lg font-medium">
          <Tab onClick={() => setCategory("Marvel")}>Marvel</Tab>
          <Tab onClick={() => setCategory("Avengers")}>Avengers</Tab>
          <Tab onClick={() => setCategory("Transformers")}>Transformers</Tab>
          <Tab onClick={() => setCategory("Star Wars")}>Star Wars</Tab>
        </TabList>

        <div className="container mx-auto mt-5">
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryToys?.map((toy) => (
                <SingleCategoryToy key={toy._id} toy={toy}></SingleCategoryToy>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryToys?.map((toy) => (
                <SingleCategoryToy key={toy._id} toy={toy}></SingleCategoryToy>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryToys?.map((toy) => (
                <SingleCategoryToy key={toy._id} toy={toy}></SingleCategoryToy>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryToys?.map((toy) => (
                <SingleCategoryToy key={toy._id} toy={toy}></SingleCategoryToy>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
