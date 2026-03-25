export interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
  textColor: string;
  logo: string;
}

export const teams: Team[] = [
  { id: "csk", name: "Chennai Super Kings",         shortName: "CSK",  color: "#FFC107", textColor: "#000", logo: "/teams/csk.png" },
  { id: "mi",  name: "Mumbai Indians",              shortName: "MI",   color: "#004BA0", textColor: "#fff", logo: "/teams/mi.png" },
  { id: "rcb", name: "Royal Challengers Bengaluru", shortName: "RCB",  color: "#D4213D", textColor: "#fff", logo: "/teams/rcb.png" },
  { id: "kkr", name: "Kolkata Knight Riders",       shortName: "KKR",  color: "#3A225D", textColor: "#fff", logo: "/teams/kkr.png" },
  { id: "srh", name: "Sunrisers Hyderabad",         shortName: "SRH",  color: "#FF822A", textColor: "#000", logo: "/teams/srh.png" },
  { id: "dc",  name: "Delhi Capitals",              shortName: "DC",   color: "#17479E", textColor: "#fff", logo: "/teams/dc.png" },
  { id: "lsg", name: "Lucknow Super Giants",        shortName: "LSG",  color: "#A72056", textColor: "#fff", logo: "/teams/lsg.png" },
  { id: "rr",  name: "Rajasthan Royals",            shortName: "RR",   color: "#EA1A85", textColor: "#fff", logo: "/teams/rr.png" },
  { id: "gt",  name: "Gujarat Titans",              shortName: "GT",   color: "#1C1C2B", textColor: "#fff", logo: "/teams/gt.png" },
  { id: "pbks",name: "Punjab Kings",                shortName: "PBKS", color: "#DD1F2D", textColor: "#fff", logo: "/teams/pbks.png" },
];

export const getTeam = (id: string) => teams.find(t => t.id === id);