// Mongo dùng ObjectId để định danh các document
// tạo kiểu alias để phân biệt một cách rõ ràng với string
export type ObjectIdString = string;


// ghi lại thông tin tạo và cập nhật. 
export interface ITimeStamps {
    createdAt?: Date;
    updatedAt?: Date;
}