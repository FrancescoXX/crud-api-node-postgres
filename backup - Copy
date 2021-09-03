--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8 (Debian 12.8-1.pgdg100+1)
-- Dumped by pg_dump version 12.8 (Debian 12.8-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: francesco
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO francesco;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: francesco
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO francesco;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: francesco
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: francesco
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: francesco
--

COPY public.users (id, username, email, password, "createdAt", "updatedAt") FROM stdin;
1	francesco	francesco@mail.com	password1	2021-08-30 09:38:15.954+00	2021-08-30 09:38:15.954+00
2	saafer	saafer@mail.com	password2	2021-08-30 09:38:41.404+00	2021-08-30 09:38:41.404+00
3	zayd	zayd@mail.com	password3	2021-08-30 09:38:52.442+00	2021-08-30 09:38:52.442+00
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: francesco
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: francesco
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: francesco
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: francesco
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

