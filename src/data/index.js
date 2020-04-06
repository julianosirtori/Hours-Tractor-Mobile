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
  });
}

export default db;
