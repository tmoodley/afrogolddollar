import React from "react";
import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: "/img/team/team_img01.png",
      name: "Gordon Nathanson",
      designation: "Founder & CEO",
    },
    {
      src: "/img/team/team_img02.png",
      name: "Salim Eceoloza",
      designation: "CFO",
    },
    {
      src: "/img/team/team_img03.png",
      name: "Tyrone Moodley",
      designation: "CTO",
    },
    {
      src: "/img/team/team_img04.png",
      name: "Alexander Munro",
      designation: "COO",
    },    
  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">OUr team</span>
              <h2 className="title">
                The Leadership <br /> <span>Team</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
