CREATE MIGRATION m1bl7pp4hjk2zmckma2hcmix2gelwulg5wusifyzu7d6p56a636q7a
    ONTO m1r2fzrtr4uqro35akrtfpmwbmtgrgjshrcvy2mdazyls6spr2ebca
{
  ALTER TYPE default::Player {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
