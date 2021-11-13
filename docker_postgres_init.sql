DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id varchar(36) NOT NULL,
  email varchar(255) default NULL,
  password varchar(255),
  PRIMARY KEY (id)
);

INSERT INTO users (id,email,password)
VALUES
  ('F3334371-A1E8-5E0C-DF5B-C8712ED9AA59','mauris.elit.dictum@yahoo.net','IJG35JAP7VG'),
  ('B736EAAB-8B4A-B66D-23B3-7DFD3E8FF95A','aliquam.vulputate@outlook.couk','CXR57TGE7RG'),
  ('D5F48129-7E99-0DB7-633D-D42195804ECE','aliquet.magna@outlook.com','AUJ03BSS8KC'),
  ('64DD1967-749D-DED8-58E2-11DD4A9CE815','vestibulum@google.couk','UMY54HSK3PG'),
  ('CA577D0D-E6AB-1CC2-96F9-1A6E57E77B6E','mauris.vel.turpis@outlook.net','SHI43YGP5TC'),
  ('D0184D32-C692-B4BE-556D-8F6ACDEFED81','a@protonmail.net','FTE55WJT6LH');

DROP TABLE IF EXISTS transactions;

CREATE TABLE transactions (
  id varchar(255) NOT NULL,
  amount bigint default NULL,
  date varchar(255),
  jar varchar(255) default NULL,
  necessary varchar(255) default NULL,
  note TEXT default NULL,
  users_id text NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_usersId FOREIGN KEY (users_id)
    REFERENCES users(id)
);

INSERT INTO transactions (id,amount,date,jar,necessary,note, users_id)
VALUES
  ('F3334371-A1E8-5E0C-DF5B-C8712ED9AA59',-13,'52/1/2021','ENT','false','at, egestas', 'F3334371-A1E8-5E0C-DF5B-C8712ED9AA59'),
  ('B736EAAB-8B4A-B66D-23B3-7DFD3E8FF95A',-99,'22/14/2020','LTP','false','varius ultrices, mauris ipsum', 'F3334371-A1E8-5E0C-DF5B-C8712ED9AA59'),
  ('D5F48129-7E99-0DB7-633D-D42195804ECE',-134,'59/1/2022','SHR','true','sagittis felis. Donec tempor, est ac mattis', 'F3334371-A1E8-5E0C-DF5B-C8712ED9AA59'),
  ('64DD1967-749D-DED8-58E2-11DD4A9CE815',-36,'44/10/2021','PGR','false','penatibus et magnis dis parturient montes,', 'F3334371-A1E8-5E0C-DF5B-C8712ED9AA59'),
  ('CA577D0D-E6AB-1CC2-96F9-1A6E57E77B6E',-31,'58/3/2021','FFR','false','aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque', 'F3334371-A1E8-5E0C-DF5B-C8712ED9AA59'),
  ('D0184D32-C692-B4BE-556D-8F6ACDEFED81',-107,'57/28/2021','SHR','true','ut mi. Duis risus odio, auctor', 'B736EAAB-8B4A-B66D-23B3-7DFD3E8FF95A'),
  ('55E1DBDF-B1DA-7F38-3503-E7EC8E00D2EC',-53,'55/26/2021','SHR','true','magna nec quam.', 'B736EAAB-8B4A-B66D-23B3-7DFD3E8FF95A'),
  ('F0D75488-1B63-3D97-8242-DB05823B5129',-123,'52/16/2021','SHR','false','a ultricies adipiscing, enim mi', 'B736EAAB-8B4A-B66D-23B3-7DFD3E8FF95A'),
  ('4AD68725-00A0-92B0-770B-68499A10D658',-54,'8/13/2021','ESS','true','Morbi vehicula. Pellentesque tincidunt', 'B736EAAB-8B4A-B66D-23B3-7DFD3E8FF95A'),
  ('F6EA7B61-2CAC-2ED9-6AE8-D77CE18EEE4E',-80,'8/28/2021','SHR','true','Maecenas iaculis aliquet diam. Sed diam lorem, auctor', 'B736EAAB-8B4A-B66D-23B3-7DFD3E8FF95A'),
  ('AC1CF847-D646-8A31-E7E1-68CD07BAE0E9',-143,'34/21/2022','FFR','true','sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent', 'B736EAAB-8B4A-B66D-23B3-7DFD3E8FF95A'),
  ('003081E8-5B17-EF90-BBFB-D35EEF98921D',-102,'3/26/2021','SHR','true','rutrum non, hendrerit id, ante.', 'D5F48129-7E99-0DB7-633D-D42195804ECE'),
  ('B7C8D78E-F21D-02DB-8428-81CA2532E5BC',3,'54/23/2021','FFR','true','Aenean eget metus. In', 'D5F48129-7E99-0DB7-633D-D42195804ECE'),
  ('FF85F768-79B4-BF05-17AC-479AA83ECA73',-16,'53/10/2022','ESS','true','a, magna. Lorem ipsum dolor sit amet, consectetuer', 'D5F48129-7E99-0DB7-633D-D42195804ECE'),
  ('24182971-A35E-876D-6421-445E2DB7BB43',-79,'59/13/2020','ENT','false','facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla.', 'D5F48129-7E99-0DB7-633D-D42195804ECE'),
  ('BA456507-CA34-E382-AFA1-864A872E8968',-55,'18/15/2021','LTP','false','Nulla aliquet. Proin', '64DD1967-749D-DED8-58E2-11DD4A9CE815'),
  ('6D684953-E0DB-9B4F-79AC-C31B9A3A009A',-40,'40/16/2022','ESS','false','non, cursus non, egestas', '64DD1967-749D-DED8-58E2-11DD4A9CE815'),
  ('43ABB9E0-2E7E-6500-97DD-5C453A56E5CB',-12,'55/6/2021','PGR','true','ac', '64DD1967-749D-DED8-58E2-11DD4A9CE815'),
  ('B8E61C7A-425A-917A-0495-9B08B8EAE4B1',4,'1/1/2022','LTP','true','rutrum urna, nec luctus', '64DD1967-749D-DED8-58E2-11DD4A9CE815'),
  ('A91BD2B7-6E75-36C9-61FA-C0D024E53E41',-112,'35/30/2022','ENT','true','litora torquent per conubia', '64DD1967-749D-DED8-58E2-11DD4A9CE815');