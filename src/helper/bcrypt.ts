<<<<<<< HEAD
import bcrypt from "bcrypt";

export default class EncryptHelper {

    public async Salt() {
        // tslint:disable-next-line: variable-name
        const _salt = await new Promise((resolve, reject) => {
            bcrypt.genSalt( 9, (err, salt) => {
                if (err) { reject(err); }
                resolve(salt);
            });
        });

        return _salt;
    }

    public async Hash(Text: string) {
        // tslint:disable-next-line: variable-name
        const _hash = await new Promise((resolve, reject) => {
            bcrypt.hash(Text, 9, (err, hash) => {
                if (err) { reject(err); }
                resolve(hash);
            });
        })

        return _hash;
    }

    public async Compare(Str: string, StrCmp: any) {
        return await bcrypt.compare(Str, StrCmp);
    }

}
=======
import bcrypt from "bcrypt";

export default class EncryptHelper {

    public async Salt() {
        // tslint:disable-next-line: variable-name
        const _salt = await new Promise((resolve, reject) => {
            bcrypt.genSalt( 9, (err, salt) => {
                if (err) { reject(err); }
                resolve(salt);
            });
        });

        return _salt;
    }

    public async Hash(Text: string) {
        // tslint:disable-next-line: variable-name
        const _hash = await new Promise((resolve, reject) => {
            bcrypt.hash(Text, 9, (err, hash) => {
                if (err) { reject(err); }
                resolve(hash);
            });
        })

        return _hash;
    }

    public async Compare(Str: string, StrCmp: any) {
        return await bcrypt.compare(Str, StrCmp);
    }

}
>>>>>>> master
