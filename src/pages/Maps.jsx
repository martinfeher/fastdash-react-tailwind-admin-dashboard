import AdminLayout from "../layout/AdminLayout";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { connect } from "react-redux";

const Maps = ({global: {darkMode}}) => {
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full">
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <h5 className="dark:text-gray-300">Basic map</h5>
                  <ComposableMap>
                    <Geographies geography="/map/countries.json">
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            style={
                              geo.id == "USA" ||
                              geo.id == "DEU" ||
                              geo.id == "AUS"
                                ? {
                                    default: {
                                      fill: "#77F",
                                    },
                                    hover: {
                                      fill: "#77F",
                                      stroke: "#607D8B",
                                    },
                                    pressed: {
                                      fill: "#77F",
                                      stroke: "#607D8B",
                                    },
                                  }
                                : {
                                    default: {
                                      fill: "#CCC",
                                    },
                                    hover: {
                                      fill: "#CCC",
                                      stroke: "#607D8B",
                                    },
                                    pressed: {
                                      fill: "#CCC",
                                      stroke: "#607D8B",
                                    },
                                  }
                            }
                          />
                        ))
                      }
                    </Geographies>
                  </ComposableMap>
                </div>

                <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm flex flex-col">
                  <h5 className="dark:text-gray-300">Custom map</h5>
                  <div className="flex flex-col gap-3">
                    <ComposableMap>
                      <Geographies geography="/map/countries.json">
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              style={
                                geo.id == "USA"
                                  ? {
                                      default: {
                                        fill: "#77F",
                                      },
                                      hover: {
                                        fill: "#999",
                                      },
                                    }
                                  : geo.id == "CHN"
                                  ? {
                                      default: {
                                        fill: "#F77",
                                      },
                                      hover: {
                                        fill: "#999",
                                      },
                                    }
                                  : geo.id == "IND"
                                  ? {
                                      default: {
                                        fill: "#EE9",
                                      },
                                      hover: {
                                        fill: "#999",
                                      },
                                    }
                                  : geo.id == "BRA"
                                  ? {
                                      default: {
                                        fill: "#9E9",
                                      },
                                      hover: {
                                        fill: "#999",
                                      },
                                    }
                                  : geo.id == "AUS"
                                  ? {
                                      default: {
                                        fill: "#7F7",
                                      },
                                      hover: {
                                        fill: "#999",
                                      },
                                    }
                                  : geo.id == "DEU"
                                  ? {
                                      default: {
                                        fill: "#FE9",
                                      },
                                      hover: {
                                        fill: "#999",
                                      },
                                    }
                                  : geo.id == "FRA"
                                  ? {
                                      default: {
                                        fill: "#55E",
                                      },
                                      hover: {
                                        fill: "#999",
                                      },
                                    }
                                  : {
                                      default: {
                                        fill: "#CCC",
                                      },
                                      hover: {
                                        fill: "#999",
                                      },
                                    }
                              }
                            />
                          ))
                        }
                      </Geographies>
                    </ComposableMap>
                    <div className="flex flex-wrap justify-center items-center mt-[8px] text-[15px]">
                      <div className="flex">
                        <div
                          className="w-1.5 h-1.5 mt-[9px] mr-[8px] rounded-full"
                          style={{
                            backgroundColor: "#77F",
                          }}
                        ></div>
                        <div className="text-gray-700 dark:text-gray-300">USA</div>
                        <div className="text-gray-500 dark:text-gray-400 ml-[5px]">31%</div>
                      </div>
                      <div className="flex ml-[10px]">
                        <div
                          className="w-1.5 h-1.5 mt-[9px] mr-[8px] rounded-full"
                          style={{
                            backgroundColor: "#F77",
                          }}
                        ></div>
                        <div className="text-gray-700 dark:text-gray-300">China</div>
                        <div className="text-gray-500 dark:text-gray-400 ml-[5px]">22%</div>
                      </div>
                      <div className="flex ml-[10px]">
                        <div
                          className="w-1.5 h-1.5 mt-[9px] mr-[8px] rounded-full"
                          style={{
                            backgroundColor: "#EE9",
                          }}
                        ></div>
                        <div className="text-gray-700 dark:text-gray-300">India</div>
                        <div className="text-gray-500 dark:text-gray-400 ml-[5px]">15%</div>
                      </div>

                      <div className="flex ml-[10px]">
                        <div
                          className="w-1.5 h-1.5 mt-[9px] mr-[8px] rounded-full"
                          style={{
                            backgroundColor: "#9E9",
                          }}
                        ></div>
                        <div className="text-gray-700 dark:text-gray-300">Brazilia</div>
                        <div className="text-gray-500 dark:text-gray-400 ml-[5px]">7%</div>
                      </div>
                      <div className="flex ml-[10px]">
                        <div
                          className="w-1.5 h-1.5 mt-[9px] mr-[8px] rounded-full"
                          style={{
                            backgroundColor: "#FE9",
                          }}
                        ></div>
                        <div className="text-gray-700 dark:text-gray-300">Germany</div>
                        <div className="text-gray-500 dark:text-gray-400 ml-[5px]">5%</div>
                      </div>
                      <div className="flex ml-[10px]">
                        <div
                          className="w-1.5 h-1.5 mt-[9px] mr-[8px] rounded-full"
                          style={{
                            backgroundColor: "#55E",
                          }}
                        ></div>
                        <div className="text-gray-700 dark:text-gray-300">France</div>
                        <div className="text-gray-500 dark:text-gray-400 ml-[5px]">4%</div>
                      </div>
                      <div className="flex ml-[10px]">
                        <div
                          className="w-1.5 h-1.5 mt-[9px] mr-[8px] rounded-full"
                          style={{
                            backgroundColor: "#7F7",
                          }}
                        ></div>
                        <div className="text-gray-700 dark:text-gray-300">Australia</div>
                        <div className="text-gray-500 dark:text-gray-400 ml-[5px]">2.5%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </AdminLayout>
        </div>
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    global: state.global,
  });
  
  export default connect(mapStateToProps)(Maps);