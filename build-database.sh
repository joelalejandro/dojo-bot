#!/bin/bash

DATABASE_NAME="dojo-bot.db"

if [ ! -f "/usr/bin/sqlite3" ]; then
    echo "SQLITE is not available. Install it, then run ./build-database.sh"
else
    sqlite3 "$DATABASE_NAME" <<SQL
create table teams (
    id integer primary key autoincrement,
    name text,
    weekdays text,
    time_to_send text
);

create table team_questions (
    id integer primary key autoincrement,
    team_id integer,
    question text
);

create table users (
    id integer primary key autoincrement,
    username text,
    team_id integer,
    email text
);

create table team_users (
    id integer primary key autoincrement,
    team_id integer,
    user_id integer
);

create table user_dailies (
    id integer primary key autoincrement,
    user_id integer,
    date_time date,
    status text
);

create table daily_answers (
    id integer primary key autoincrement,
    user_daily_id integer,
    question text,
    answer text
);
SQL
fi