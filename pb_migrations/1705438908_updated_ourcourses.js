/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndfi54skdr1r5n3")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_1REBJ85` ON `ourcourses` (\n  `courseuuid`,\n  `coursename`,\n  `coursecode`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndfi54skdr1r5n3")

  collection.indexes = [
    "CREATE INDEX `idx_1REBJ85` ON `ourcourses` (\n  `coursename`,\n  `courseuuid`,\n  `coursecategory`\n)"
  ]

  return dao.saveCollection(collection)
})
