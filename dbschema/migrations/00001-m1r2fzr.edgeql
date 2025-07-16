CREATE MIGRATION m1r2fzrtr4uqro35akrtfpmwbmtgrgjshrcvy2mdazyls6spr2ebca
    ONTO initial
{
  CREATE SCALAR TYPE default::MatchFormat EXTENDING enum<`Single`, HomeAway>;
  CREATE SCALAR TYPE default::ScoringMode EXTENDING enum<SumScore, SetWins>;
  CREATE FUTURE simple_scoping;
  CREATE TYPE default::Player {
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::Competition {
      CREATE MULTI LINK participants: default::Player;
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY match_format: default::MatchFormat;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY scoring_mode: default::ScoringMode;
      CREATE REQUIRED PROPERTY set_count: std::int16;
  };
  CREATE TYPE default::`Match` {
      CREATE REQUIRED LINK competition: default::Competition;
      CREATE REQUIRED LINK player_a: default::Player;
      CREATE REQUIRED LINK player_b: default::Player;
      CREATE OPTIONAL LINK winner: default::Player;
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE OPTIONAL PROPERTY is_draw: std::bool;
  };
  ALTER TYPE default::Competition {
      CREATE MULTI LINK matches: default::`Match`;
  };
  CREATE TYPE default::MatchSet {
      CREATE REQUIRED LINK `match`: default::`Match`;
      CREATE REQUIRED PROPERTY score_a: std::int16;
      CREATE REQUIRED PROPERTY score_b: std::int16;
      CREATE REQUIRED PROPERTY set_number: std::int16;
  };
  ALTER TYPE default::`Match` {
      CREATE MULTI LINK sets: default::MatchSet;
  };
};
