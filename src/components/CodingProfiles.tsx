import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Target, Flame, Award } from "lucide-react";

const profiles = [
  {
    platform: "LeetCode",
    username: "knight2003",
    url: "https://leetcode.com/u/knight2003/",
    stats: [
      { label: "Problems Solved", value: "700+", icon: Target },
      { label: "Rating", value: "2139", icon: Trophy },
      { label: "Rank", value: "Guardian", icon: Award }
    ],
    color: "neon-orange",
    description: "Consistently solving advanced DSA problems across arrays, graphs, DP, and system design patterns."
  },
  {
    platform: "Codeforces",
    username: "Strong002",
    url: "https://codeforces.com/profile/Strong002",
    stats: [
      { label: "Problems Solved", value: "220+", icon: Target },
      { label: "Rating", value: "1645", icon: Trophy },
      { label: "Rank", value: "Expert", icon: Flame }
    ],
    color: "neon-cyan",
    description: "Competitive programming practice focusing on algorithms, math, and contest problem solving."
  }
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
          Coding Profiles
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Competitive programming and DSA practice sharpen my problem-solving skills for real-world system design.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profiles.map((profile, index) => {
            const PlatformIcon = profile.platform === "LeetCode" ? Trophy : Flame;
            return (
              <Card 
                key={index}
                className="card-cyber p-6 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full bg-${profile.color}/10 border border-${profile.color}/20 group-hover:scale-110 transition-transform`}>
                    <PlatformIcon className={`h-7 w-7 text-${profile.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary font-orbitron">{profile.platform}</h3>
                    <p className="text-sm text-muted-foreground">@{profile.username}</p>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {profile.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {profile.stats.map((stat, statIndex) => {
                    const StatIcon = stat.icon;
                    return (
                      <div 
                        key={statIndex} 
                        className={`text-center p-3 rounded-lg bg-${profile.color}/5 border border-${profile.color}/20`}
                      >
                        <StatIcon className={`h-4 w-4 mx-auto mb-1 text-${profile.color}`} />
                        <p className="text-lg font-bold text-foreground">{stat.value}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>

                <a 
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    className={`w-full border-${profile.color}/30 hover:bg-${profile.color}/10 text-${profile.color}`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit {profile.platform}
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>

        {/* Achievement badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Badge className="bg-neon-orange/20 text-neon-orange border-neon-orange/30 px-4 py-2 text-sm">
            <Trophy className="h-4 w-4 mr-2" />
            LeetCode Guardian — 2139 Rating
          </Badge>
          <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30 px-4 py-2 text-sm">
            <Flame className="h-4 w-4 mr-2" />
            Codeforces Expert — 1645 Rating
          </Badge>
          <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2 text-sm">
            <Target className="h-4 w-4 mr-2" />
            920+ Total Problems Solved
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
