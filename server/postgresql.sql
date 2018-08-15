-- ----------------------------
--  Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
	"id" serial PRIMARY KEY,
	"name" varchar(50) NOT NULL,
	"umid" varchar(50) NOT NULL,
	"password" varchar(50) NOT NULL,
	"role" int4 NOT NULL
);




-- ----------------------------
--  Table structure for versions
-- ----------------------------
DROP TABLE IF EXISTS "public"."versions";
CREATE TABLE "public"."versions" (
	"id" serial PRIMARY KEY,
	"name" varchar(50) NOT NULL,
	"onduty" varchar(50),
	"onlineDate" date
);

-- ----------------------------
--  Table structure for demands
-- ----------------------------
DROP TABLE IF EXISTS "public"."demands";
CREATE TABLE "public"."demands" (
	"id" serial PRIMARY KEY,
	"name" varchar(100) NOT NULL,
	"versionId" int4 NOT NULL,
	"owner" varchar(100),
	"ownerName" varchar(100),
	"coder" varchar(100),
	"coderName" varchar(100),
	"workload" varchar(50),
	"demandsMeeting" varchar(100),
	"demandsMeetingName" varchar(100),
	"designReview" varchar(10),
	"codeReview" varchar(10),
	"productManager" varchar(20),
	"readDoc" varchar(10),
	"uiConfirm" varchar(10),
	"uiConfirmer" varchar(20),
	"toUiconfirmDate" date,
	"uiConfirmDate" date,
	"interfaceDoc" varchar(10),
	"debugst" date,
	"debuget" date,
	"selfTestDate" date,
	"passSmokeDate" date,
	"passSmoke" varchar(10),
	"notPassSmokeReason" varchar(100)
);

-- ----------------------------
--  Table structure for cms_records
-- ----------------------------
DROP TABLE IF EXISTS "public"."cms_records";
CREATE TABLE "public"."cms_records" (
	"id" serial PRIMARY KEY,
	"versionId" int4 NOT NULL,
	"cmsDate" date,
	"reason" varchar(10),
	"description" varchar(200),
	"passTest" varchar(10),
	"workload" varchar(50),
	"outline" varchar(10),
	"ownerName" varchar(50),
	"nextVersion" varchar(50),
	"files" varchar(1000)
);

-- ----------------------------
--  Table structure for session
-- ----------------------------
DROP TABLE IF EXISTS "public"."session";
CREATE TABLE "public"."session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
