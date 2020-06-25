/* eslint-disable no-multi-str */
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');

export function createTablesDB() {
  db.transaction((tx) => {
    tx.executeSql(
      'create table if not exists tractors ( \
        id INTEGER PRIMARY KEY AUTOINCREMENT, \
        brand INTEGER, \
        year NUMERIC, \
        name TEXT NOT NULL, \
        totalHours INTEGER NOT NULL \
      );',
    );

    tx.executeSql(
      'create table if not exists clients ( \
        id INTEGER PRIMARY KEY AUTOINCREMENT, \
        name TEXT NOT NULL, \
        address TEXT NOT NULL, \
        contact TEXT NOT NULL \
      );',
    );

    tx.executeSql(
      'create table if not exists orders ( \
        id INTEGER PRIMARY KEY AUTOINCREMENT, \
        client_id_ INTEGER NOT NULL, \
        tractor_id INTEGER NOT NULL, \
        description TEXT NOT NULL, \
        value_time REAL NOT NULL, \
        total_time TEXT NOT NULL, \
        isPaid BLOB NOT NULL, \
        FOREIGN KEY(tractor_id) REFERENCES tractors(id), \
        FOREIGN KEY(client_id_) REFERENCES clients(id) \
      );',
    );
  });
}

export default db;
