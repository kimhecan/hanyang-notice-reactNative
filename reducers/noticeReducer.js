import hanyangNoticeCrawler from '../crawler/hanyang';

const initialState = {
  campus: { title: [], class: [], date: [], url: [] },
  library: { title: [], class: [], date: [], url: [] },
  dormitory: {
    happy: { title: [], class: [], date: [], url: [] },
    create: { title: [], class: [], date: [], url: [] },
  },
  computing: { title: [], class: [], date: [], url: [] },
  pharmacy: { title: [], class: [], date: [], url: [] },
  engineering: { title: [], class: [], date: [], url: [] },
  cultures: { title: [], class: [], date: [], url: [] },
  communication: { title: [], class: [], date: [] },
  economics: { title: [], class: [], date: [], url: [] },
  science: { title: [], class: [], date: [] },
  design: { title: [], class: [], date: [], url: [] },
  sport: { title: [], class: [], date: [], url: [] }
}

const updateCampus = "updateCampus";
const updateLibrary = "updateLibrary";
const updateHappy = "updateHappy";
const updateCreate = "updateCreate";
const updateComputing = "updateComputing";
const updatepharmacy = "updatepharmacy";
const updateEngineering = "updateEngineering";
const updateCultures = "updateCultures";
const updateCommication = "updateCommication";
const updateEconomics = "updateEconomics";
const updateScience = "updateScience";
const updateDesign = "updateDesign";
const updateSport = "updateSport";


const reducer = (state = initialState, action) => {
  switch (action.type) {

  }
}

export default reducer