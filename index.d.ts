// tslint:disable:member-access
declare namespace SFS2X {
    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ClientDisconnectionReason.html
     *
     * The possible reasons why a disconnection from the server occurred.
     */
    enum ClientDisconnectionReason {
        /**
         * Client was banned from the server.
         *
         * Banning can occur automatically (i.e. for flooding, if the flood filter is active) or due to the intervention
         * of a user with enough privileges (i.e. an administrator or a moderator).
         */
        BAN,

        /**
         * Client was disconnected because it was idle for too long.
         *
         * The connection timeout depends on the server settings.
         */
        IDLE,

        /**
         * Client was kicked out of the server.
         *
         * Kicking can occur automatically (i.e. for swearing, if the words filter is active) or due to the intervention
         * of a user with enough privileges (i.e. an administrator or a moderator).
         */
        KICK,

        /**
         * The client manually disconnected from the server.
         *
         * The disconnect() method on the SmartFox class was called.
         */
        MANUAL,

        /**
         * A generic network error occurred, and the client is unable to determine the cause of the disconnection.
         *
         * The server-side log should be checked for possible error messages or warnings.
         */
        UNKNOWN,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSErrorCodes.html
     *
     * The SmartFoxServer error codes and the related error messages.
     *
     * This class class provides a mean of translation between server error codes and the related error messages.
     *
     * Error messages are provided by defualt in the English language but they can be localized and substituted in any
     * other language. The error messages contain special placeholders that are processed at runtime and substituted
     * with runtime data. They are in the form of a number enclosed in curly brackets such as: {0}, {1}, etc. Please
     * make sure you maintain these placeholders while translating the messages.
     */
    class SFSErrorCodes {
        /**
         * Sets the text of the error message corresponding to the passed error code.
         *
         * NOTE: you have to make sure you maintain all the placeholders while modifying a message.
         *
         * @param code The code of the error message to be modified.
         * @param message The new error message, including the placeholders for runtime informations.
         */
        static setErrorMessage(code: number, message: string): void;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSEvent.html
     *
     * The main event types dispatched by the SmartFoxServer 2X JavaScript API.
     */
    enum SFSEvent {
        /**
         * The adminMessage event type, dispatched when the current user receives a message from an administrator user.
         *
         * This event is caused by the AdminMessageRequest request sent by a user with administration privileges.
         */
        ADMIN_MESSAGE,

        /**
         * The connection event type, dispatched when a connection between the client and a SmartFoxServer 2X instance
         * is attempted.
         *
         * This event is fired in response to a call to the SmartFox.connect() method.
         */
        CONNECTION,

        /**
         * The connectionLost event type, dispatched when the connection between the client and the SmartFoxServer 2X
         * instance is interrupted.
         *
         * This event is fired in response to a call to the SmartFox.disconnect() method.
         */
        CONNECTION_LOST,

        /**
         * The extensionResponse event type, dispatched when data coming from a server-side Extension is received by the
         * current user.
         *
         * Data is usually sent by the server to one or more clients in response to an ExtensionRequest request, but not
         * necessarily.
         */
        EXTENSION_RESPONSE,

        /**
         * The invitation event type, dispatched when the current user receives an invitation from another user.
         *
         * This event is caused by the InviteUsersRequest and CreateSFSGameRequest requests; the user is supposed to
         * reply using the InvitationReplyRequest request.
         */
        INVITATION,

        /**
         * The invitationReply event type, dispatched when the current user receives a reply to an invitation he sent
         * previously.
         *
         * This event is caused by the InvitationReplyRequest request sent by the invitee.
         */
        INVITATION_REPLY,

        /**
         * The invitationReplyError event type, dispatched when an error occurs while the current user is sending a
         * reply to an invitation he received.
         *
         * This event is fired in response to the InvitationReplyRequest request in case the operation failed.
         */
        INVITATION_REPLY_ERROR,

        /**
         * The login event type, dispatched when the current user performs a successful login in a server Zone.
         *
         * This event is fired in response to the LoginRequest request.
         */
        LOGIN,

        /**
         * The loginError event type, dispatched if an error occurs while the user login is being performed.
         *
         * This event is fired in response to the LoginRequest request in case the operation failed.
         */
        LOGIN_ERROR,

        /**
         * The logout event type, dispatched when the current user performs logs out of the server Zone.
         *
         * This event is fired in response to the LogoutRequest request.
         */
        LOGOUT,

        /**
         * The mmoItemVariablesUpdate event type, dispatched when an MMOItem Variable is updated in an MMORoom.
         *
         * This event is caused by an MMOItem Variable being set, updated or deleted in a server side Extension, and it
         * is received only if the current user has the related MMOItem in his Area of Interest.
         */
        MMOITEM_VARIABLES_UPDATE,

        /**
         * The moderatorMessage event type, dispatched when the current user receives a message from a moderator user.
         *
         * This event can be caused by either the ModeratorMessageRequest, KickUserRequest or BanUserRequest requests
         * sent by a user with at least moderation privileges. Also, this event can be caused by a kick/ban action
         * executed through the SmartFoxServer 2X Administration Tool.
         */
        MODERATOR_MESSAGE,

        /**
         * The objectMessage event type, dispatched when an object containing custom data is received by the current
         * user.
         *
         * This event is caused by an ObjectMessageRequest request sent by any user in the target Room.
         */
        OBJECT_MESSAGE,

        /**
         * The pingPong event type, dispatched when a new lag value measurement is available.
         *
         * This event is fired when the automatic lag monitoring is turned on by passing true to the enableLagMonitor()
         * method.
         */
        PING_PONG,

        /**
         * The playerToSpectator event type, dispatched when a player is turned to a spectator inside a Game Room.
         *
         * This event is fired in response to the PlayerToSpectatorRequest> request if the operation is executed
         * successfully.
         */
        PLAYER_TO_SPECTATOR,

        /**
         * The playerToSpectatorError event type, dispatched when an error occurs while the current user is being turned
         * from player to spectator in a Game Room.
         *
         * This event is fired in response to the PlayerToSpectatorRequest request in case the operation failed.
         */
        PLAYER_TO_SPECTATOR_ERROR,

        /**
         * The privateMessage event type, dispatched when a private message is received by the current user.
         *
         * This event is caused by a PrivateMessageRequest request sent by any user in the Zone.
         *
         * NOTE: the same event is fired by the sender's client too, so that the user is aware that the message was
         * delivered successfully to the recipient, and it can be displayed in the private chat area keeping the correct
         * message ordering. In this case there is no default way to know who the message was originally sent to. As
         * this information can be useful in scenarios where the sender is chatting privately with more than one user at
         * the same time in separate windows or tabs (and we need to write his own message in the proper one), the data
         * parameter can be used to store, for example, the id of the recipient user.
         */
        PRIVATE_MESSAGE,

        /**
         * The proximityListUpdate event type, dispatched when one more users or one or more MMOItem objects enter/leave
         * the current user's Area of Interest in a MMORoom.
         *
         * This event is fired after an MMORoom is joined and the SetUserPositionRequest request is sent at least one
         * time.
         *
         * NOTE: this event substitutes the default userEnterRoom and userExitRoom events available in regular Rooms.
         */
        PROXIMITY_LIST_UPDATE,

        /**
         * The publicMessage event type, dispatched when a public message is received by the current user.
         *
         * This event is caused by a PublicMessageRequest request sent by any user in the target Room, including the
         * current user himself.
         */
        PUBLIC_MESSAGE,

        /**
         * The roomAdd event type, dispatched when a new Room is created inside the Zone under any of the Room Groups
         * that the client subscribed.
         *
         * This event is fired in response to the CreateRoomRequest and CreateSFSGameRequest requests in case the
         * operation is executed successfully.
         */
        ROOM_ADD,

        /**
         * The roomCapacityChange event type, dispatched when the capacity of a Room is changed.
         *
         * This event is fired in response to the ChangeRoomCapacityRequest> request if the operation is executed
         * successfully.
         */
        ROOM_CAPACITY_CHANGE,

        /**
         * The roomCapacityChangeError event type, dispatched when an error occurs while attempting to change the
         * capacity of a Room.
         *
         * This event is fired in response to the ChangeRoomCapacityRequest request in case the operation failed.
         */
        ROOM_CAPACITY_CHANGE_ERROR,

        /**
         * The roomCreationError event type, dispatched if an error occurs while creating a new Room.
         *
         * This event is fired in response to the CreateRoomRequest and CreateSFSGameRequest requests in case the
         * operation failed.
         */
        ROOM_CREATION_ERROR,

        /**
         * The roomFindResult event type, dispatched when a Rooms search is completed.
         *
         * This event is fired in response to the FindRoomsRequest request to return the search result.
         */
        ROOM_FIND_RESULT,

        /**
         * The roomGroupSubscribe event type, dispatched when a Group is subscribed by the current user.
         *
         * This event is fired in response to the SubscribeRoomGroupRequest> request if the operation is executed
         * successfully.
         */
        ROOM_GROUP_SUBSCRIBE,

        /**
         * The roomGroupSubscribeError event type, dispatched when an error occurs while a Room Group is being
         * subscribed.
         *
         * This event is fired in response to the SubscribeRoomGroupRequest request in case the operation failed.
         */
        ROOM_GROUP_SUBSCRIBE_ERROR,

        /**
         * The roomGroupUnsubscribe event type, dispatched when a Group is unsubscribed by the current user.
         *
         * This event is fired in response to the UnsubscribeRoomGroupRequest request if the operation is executed
         * successfully.
         */
        ROOM_GROUP_UNSUBSCRIBE,

        /**
         * The roomGroupUnsubscribeError event type, dispatched when an error occurs while a Room Group is being
         * unsubscribed.
         *
         * This event is fired in response to the UnsubscribeRoomGroupRequest request in case the operation failed.
         */
        ROOM_GROUP_UNSUBSCRIBE_ERROR,

        /**
         * The roomJoin event type, dispatched when a Room is joined by the current user.
         *
         * This event is fired in response to the JoinRoomRequest and QuickJoinGameRequest requests in case the
         * operation is executed successfully.
         */
        ROOM_JOIN,

        /**
         * The roomJoinError event type, dispatched when an error occurs while the current user is trying to join a
         * Room.
         *
         * This event is fired in response to the JoinRoomRequest request in case the operation failed.
         */
        ROOM_JOIN_ERROR,

        /**
         * The roomNameChange event type, dispatched when the name of a Room is changed.
         *
         * This event is fired in response to the ChangeRoomNameRequest request if the operation is executed
         * successfully.
         */
        ROOM_NAME_CHANGE,

        /**
         * The roomNameChangeError event type, dispatched when an error occurs while attempting to change the name of a
         * Room.
         *
         * This event is fired in response to the ChangeRoomNameRequest request in case the operation failed.
         */
        ROOM_NAME_CHANGE_ERROR,

        /**
         * The roomPasswordStateChange event type, dispatched when the password of a Room is set, changed or removed.
         *
         * This event is fired in response to the ChangeRoomPasswordStateRequest> request if the operation is executed
         * successfully.
         */
        ROOM_PASSWORD_STATE_CHANGE,

        /**
         * The roomPasswordStateChangeError event type, dispatched when an error occurs while attempting to set, change
         * or remove the password of a Room.
         *
         * This event is fired in response to the ChangeRoomPasswordStateRequest request in case the operation failed.
         */
        ROOM_PASSWORD_STATE_CHANGE_ERROR,

        /**
         * The roomRemove event type, dispatched when a Room belonging to one of the Groups subscribed by the client is
         * removed from the Zone.
         */
        ROOM_REMOVE,

        /**
         * The roomVariablesUpdate event type, dispatched when a Room Variable is updated.
         *
         * This event is caused by the SetRoomVariablesRequest request. The request could have been sent by a user in
         * the same Room of the current user or, in case of a global Room Variable, by a user in a Room belonging to one
         * of the Groups subscribed by the current client.
         */
        ROOM_VARIABLES_UPDATE,

        /**
         * The socketError event type, dispatched when a low level socket error is detected, for example
         * bad/inconsistent data.
         */
        SOCKET_ERROR,

        /**
         * The spectatorToPlayer event type, dispatched when a spectator is turned to a player inside a Game Room.
         *
         * This event is fired in response to the SpectatorToPlayerRequest> request if the operation is executed
         * successfully.
         */
        SPECTATOR_TO_PLAYER,

        /**
         * The spectatorToPlayerError event type, dispatched when an error occurs while the current user is being turned
         * from spectator to player in a Game Room.
         *
         * This event is fired in response to the SpectatorToPlayerRequest request in case the operation failed.
         */
        SPECTATOR_TO_PLAYER_ERROR,

        /**
         * The userCountChange event type, dispatched when the number of users/players or spectators inside a Room
         * changes.
         *
         * This event is caused by a JoinRoomRequest request or a LeaveRoomRequest request. The Room must belong to one
         * of the Groups subscribed by the current client; also this event might be fired or not depending on the Room
         * configuration defined upon its creation (see the RoomSettings.events setting).
         */
        USER_COUNT_CHANGE,

        /**
         * The userEnterRoom event type, dispatched when one of the Rooms joined by the current user is entered by
         * another user.
         *
         * This event is caused by a JoinRoomRequest request; it might be fired or not depending on the Room
         * configuration defined upon its creation (see the RoomSettings.events setting).
         *
         * NOTE: if the Room is of type MMORoom, this event is never fired and it is substituted by the
         * proximityListUpdate event.
         */
        USER_ENTER_ROOM,

        /**
         * The userExitRoom event type, dispatched when one of the Rooms joined by the current user is left by another
         * user, or by the current user himself.
         *
         * This event is caused by a LeaveRoomRequest request; it might be fired or not depending on the Room
         * configuration defined upon its creation (see the RoomSettings.events setting).
         *
         * NOTE: if the Room is of type MMORoom, this event is fired when the current user leaves the Room only. For the
         * other users leaving the Room it is substituted by the proximityListUpdate event.
         */
        USER_EXIT_ROOM,

        /**
         * The userFindResult event type, dispatched when a users search is completed.
         *
         * This event is fired in response to the FindUsersRequest request to return the search result.
         */
        USER_FIND_RESULT,

        /**
         * The userVariablesUpdate event type, dispatched when a User Variable is updated.
         *
         * This event is caused by the SetUserVariablesRequest request sent by a user in one of the Rooms joined by the
         * current user.
         */
        USER_VARIABLES_UPDATE,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSDataType.html
     *
     * The costants defining the data types supported by SFSObject and SFSArray classes.
     */
    enum SFSDataType {
        /** A boolean value. */
        BOOL,

        /** An array of boolean values. */
        BOOL_ARRAY,

        /** A byte (8 bit) value. */
        BYTE,

        /** An array of byte values. */
        BYTE_ARRAY,

        /** A double precision number (64 bit) value. */
        DOUBLE,

        /** An array of double precision number values. */
        DOUBLE_ARRAY,

        /** A floating point number (32 bit) value. */
        FLOAT,

        /** An array of floating point number values. */
        FLOAT_ARRAY,

        /** An integer (32 bit) value. */
        INT,

        /** An array of integer values. */
        INT_ARRAY,

        /** A long integer value. */
        LONG,

        /** An array of long integer values. */
        LONG_ARRAY,

        /** A null value. */
        NULL,

        /** A nested SFSArray object. */
        SFS_ARRAY,

        /** A nested SFSObject object. */
        SFS_OBJECT,

        /** A short integer (16 bit) value. */
        SHORT,

        /** An array of short integer values. */
        SHORT_ARRAY,

        /** A UTF-8 encoded string value, with length up to 2 GBytes. */
        TEXT,

        /** A UTF-8 encoded string value, with length up to 32 KBytes. */
        UTF_STRING,

        /** An array of string values. */
        UTF_STRING_ARRAY,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSArray.html
     *
     * The SFSArray class is used by SmartFoxServer in client-server data transfer.
     */
    class SFSArray {
        /**
         * Creates a new SFSArray instance.
         *
         * This is a sort of specialized list object that can contain any type of data. The advantage of using the
         * SFSArray class (for example as a nested object inside a SFSObject object) is that you can fine tune the way
         * your data is transmitted over the network. For instance, when transmitting a list of numbers between 0 and
         * 100, those values can be treated as normal integers (which take 32 bits each), but also as shorts (16 bit) or
         * even as bytes (8 bit).
         *
         * SFSArray supports many primitive data types and related arrays of primitives; see the SFSDataType class.
         */
        constructor();

        /**
         * Appends a value of the passed type to the end of this array.
         * @param value The value to be appended to this array.
         * @param typeId The value's type identifier.
         */
        add(value: any, typeId: SFSDataType): void;

        /** Appends a boolean value to the end of this array. */
        addBool(value: boolean): void;

        /** Appends an array of booleans to the end of this array. */
        addBoolArray(array: boolean[]): void;

        /** Appends a number to the end of this array as a byte (8 bit). */
        addByte(value: number): void;

        /** Appends a byte array to the end of this array. */
        addByteArray(array: Uint8Array): void;

        /** Appends a number to the end of this array as a double precision value (64 bit). */
        addDouble(value: number): void;

        /** Appends an array of numbers to the end of this array as double precision values. */
        addDoubleArray(array: number[]): void;

        /** Appends a number to the end of this array as a floating point value (32 bit). */
        addFloat(value: number): void;

        /** Appends an array of numbers to the end of this array as floating point values. */
        addFloatArray(array: number[]): void;

        /** Appends a number to the end of this array as an integer (32 bit). */
        addInt(value: number): void;

        /** Appends an array of numbers to the end of this array as integers. */
        addIntArray(array: number[]): void;

        /** Appends a number to the end of this array as a long integer. */
        addLong(value: number): void;

        /** Appends an array of numbers to the end of this array as long integers. */
        addLongArray(array: number[]): void;

        /** Appends a null value to the end of this array. */
        addNull(): void;

        /** Appends a nested SFSArray to the end of this array. */
        addSFSArray(value: SFSArray): void;

        /** Appends a nested SFSObject to the end of this array. */
        addSFSObject(value: SFSObject): void;

        /** Appends a number to the end of this array as a short integer (16 bit). */
        addShort(value: number): void;

        /** Appends an array of numbers to the end of this array as short integers. */
        addShortArray(value: number[]): void;

        /** Appends a UTF-8 string to the end of this array (max length: 2 GBytes). */
        addText(value: string): void;

        /** Appends a UTF-8 string to the end of this array (max length: 32 KBytes). */
        addUtfString(value: string): void;

        /** Appends an array of UTF-8 strings to the end of this array. */
        addUtfStringArray(array: string[]): void;

        /**
         * Indicates whether this SFSArray contains the specified object or not.
         *
         * NOTE: this method doesn't support checking the presence of a nested SFSObject or SFSArray.
         *
         * @param object The object whose presence in this array is to be tested.
         * @returns true if the specified object is present in the SFSArray.
         */
        contains(object: any): boolean;

        /**
         * Returns the element at the specified index.
         *
         * If the typeId parameter is passed, this method also executes a type check, to make sure the requested value
         * has the expected type.
         *
         * @param index The position of the element to return.
         * @param typeId The identifier of the expected value's type. If passed and the type is not corresponding, an
         * error is thrown. If not passed, no type check is executed and the value is returned immediately.
         * @returns The element of this array at the specified index.
         */
        get(index: number, typeId: SFSDataType = null): any | null;

        /** Returns the boolean value at the specified index. */
        getBool(index: number): boolean | null;

        /** Returns the array of boolean values at the specified index. */
        getBoolArray(index: number): boolean[] | null;

        /** Returns the byte value at the specified index. */
        getByte(index: number): number | null;

        /** Returns the byte array at the specified index. */
        getByteArray(index: number): Uint8Array | null;

        /** Returns the double precision number at the specified index. */
        getDouble(index: number): number | null;

        /** Returns the array of double precision numbers at the specified index. */
        getDoubleArray(index: number): number[] | null;

        /**
         * Provides a formatted string representing this array.
         *
         * The returned string can be logged or traced in the console for debugging purposes.
         *
         * @param format If true, the output is formatted in human-readable way.
         * @returns The string representation of this array.
         */
        getDump(format: boolean = true): string;

        /** Returns the floating point number at the specified index. */
        getFloat(index: number): number | null;

        /** Returns the array of floating point numbers at the specified index. */
        getFloatArray(index: number): number[] | null;

        /**
         * Provides a detailed hexadecimal representation of this array.
         *
         * The returned string can be logged or traced in the console for debugging purposes.
         *
         * @returns The hexadecimal string representation of this array.
         */
        getHexDump(): string;

        /** Returns the integer at the specified index. */
        getInt(index: number): number | null;

        /** Returns the array of integers at the specified index. */
        getIntArray(index: number): number[] | null;

        /** Returns the long at the specified index. */
        getLong(index: number): number | null;

        /** Returns the array of long integers at the specified index. */
        getLongArray(index: number): number[] | null;

        /** Returns the SFSArray at the specified index. */
        getSFSArray(index: number): SFSArray | null;

        /** Returns the SFSObject at the specified index. */
        getSFSObject(index: number): SFSObject | null;

        /** Returns the short integer at the specified index. */
        getShort(index: number): number | null;

        /** Returns the array of short integers at the specified index. */
        getShortArray(index: number): number[] | null;

        /** Returns the UTF-8 string at the specified index. */
        getText(index: number): string | null;

        /** Returns the UTF-8 string at the specified index. */
        getUtfString(index: number): string | null;

        /** Returns the array of UTF-8 strings at the specified index. */
        getUtfStringArray(index: number): string[] | null;

        /** Indicates if the element at the specified index is of type SFSDataType.NULL. */
        isNull(index: number): boolean;

        /**
         * Indicates the number of elements in this array.
         * @returns The number of elements in this array.
         */
        size(): number;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSObject.html
     *
     * The SFSObject class is used by SmartFoxServer in client-server data transfer.
     */
    class SFSObject {
        /**
         * Creates a new SFSObject instance.
         *
         * This is a sort of specialized map object that can contain any type of data. The advantage of using the
         * SFSObject class (for example when sending an ExtensionRequest request) is that you can fine tune the way your
         * data is transmitted over the network. For instance, a number like 100 can be transmitted as a normal integer
         * (which takes 32 bits), but also a short (16 bit) or even a byte (8 bit).
         *
         * SFSObject supports many primitive data types and related arrays of primitives; see the SFSDataType class.
         *
         * NOTE: UTF-8/multi-byte strings are not supported in key names. In other words you should restrict key names
         * to standard ASCII characters. It is also recommended to keep key names very short to save bandwidth.
         */
        constructor();

        /**
         * Indicates whether this object contains a mapping for the specified key.
         * @param key The key whose presence in this object is to be checked.
         * @returns true if this object contains a mapping for the passed key.
         */
        containsKey(key: string): boolean;

        /**
         * Returns the value assigned to the specified key.
         * @param key The key whose associated value is to be returned.
         * @param typeId The identifier of the expected value's type.
         * @returns The value assigned to the specified key. null is returned if no value is associated with the passed
         * key.
         */
        get(key: string, typeId: SFSDataType = null): any | null;

        /** Returns the boolean value corresponding to the passed key. */
        getBool(key: string): boolean | null;

        /** Returns the array of boolean values corresponding to the passed key. */
        getBoolArray(key: string): boolean[] | null;

        /** Returns the byte value corresponding to the passed key. */
        getByte(key: string): number | null;

        /** Returns the byte array corresponding to the passed key. */
        getByteArray(key: string): Uint8Array | null;

        /** Returns the double precision number corresponding to the passed key. */
        getDouble(key: string): number | null;

        /** Returns the array of double precision numbers corresponding to the passed key. */
        getDoubleArray(key: string): number[] | null;

        /**
         * Provides a formatted string representing this object.
         *
         * The returned string can be logged or traced in the console for debugging purposes.
         *
         * @param format If true, the output is formatted in a human-readable way.
         */
        getDump(format: boolean = true): string;

        /** Returns the floating point number corresponding to the passed key. */
        getFloat(key: string): number | null;

        /** Returns the array of floating point numbers corresponding to the passed key. */
        getFloatArray(key: string): number[] | null;

        /**
         * Provides a detailed hexadecimal representation of this object.
         *
         * The returned string can be logged or traced in the console for debugging purposes.
         *
         * @returns The hexadecimal string representation of this object.
         */
        getHexDump(): string;

        /** Returns the integer corresponding to the passed key. */
        getInt(key: string): number | null;

        /** Returns the array of integers corresponding to the passed key. */
        getIntArray(key: string): number[] | null;

        /** Retrieves a list of all the keys contained in this object. */
        getKeysArray(): string[];

        /** Returns the long integer corresponding to the passed key. */
        getLong(key: string): number | null;

        /** Returns the array of long integers corresponding to the passed key. */
        getLongArray(key: string): number[] | null;

        /** Returns the SFSArray corresponding to the passed key. */
        getSFSArray(key: string): SFSArray | null;

        /** Returns the SFSObject corresponding to the passed key. */
        getSFSObject(key: string): SFSObject | null;

        /** Returns the short integer corresponding to the passed key. */
        getShort(key: string): number | null;

        /** Returns the array of short integers corresponding to the passed key. */
        getShortArray(key: string): number[] | null;

        /** Returns the UTF-8 string corresponding to the passed key. */
        getText(key: string): string | null;

        /** Returns the UTF-8 string corresponding to the passed key. */
        getUtfString(key: string): string | null;

        /** Returns the array of UTF-8 strings corresponding to the passed key. */
        getUtfStringArray(key: string): string[] | null;

        /** Indicates if the value mapped by the passed key is of type SFSDataType.NULL. */
        isNull(key: string): boolean | null;

        /**
         * Assigns a value of the passed type to the passed key.
         * @param key The key to which the specified value has to be assigned.
         * @param value The value to be assigned to the passed key.
         * @param typeId The value's type identifier.
         */
        put(key: string, value: any, typeId: SFSDataType): void;

        /** Assigns a boolean value to the passed key. */
        putBool(key: string, value: boolean): void;

        /** Assigns an array of booleans to the passed key. */
        putBoolArray(key: string, array: boolean[]): void;

        /** Assigns a number to the passed key as a byte (8 bit). */
        putByte(key: string, value: number): void;

        /** Assigns a byte array to the passed key. */
        putByteArray(key: string, array: Uint8Array): void;

        /** Assigns a number to the passed key as a double precision value (64 bit). */
        putDouble(key: string, value: number): void;

        /** Assigns an array of numbers to the passed key as double precision values. */
        putDoubleArray(key: string, array: number[]): void;

        /** Assigns a number to the passed key as a floating point value (32 bit). */
        putFloat(key: string, value: number): void;

        /** Assigns an array of numbers to the passed key as floating point values. */
        putFloatArray(key: string, array: number[]): void;

        /** Assigns a number to the passed key as an integer (32 bit). */
        putInt(key: string, value: number): void;

        /** Assigns an array of numbers to the passed key as integers. */
        putIntArray(key: string, array: number[]): void;

        /** Assigns a number to the passed key as a long integer. */
        putLong(key: string, value: number): void;

        /** Assigns an array of numbers to the passed key as long integers. */
        putLongArray(key: string, value: number[]): void;

        /** Assigns a null value to the passed key. */
        putNull(key: string): void;

        /** Assigns a nested SFSArray to the passed key. */
        putSFSArray(key: string, value: SFSArray): void;

        /** Assigns a nested SFSObject to the passed key. */
        putSFSObject(key: string, value: SFSObject): void;

        /** Assigns a number to the passed key as a short integer (16 bit). */
        putShort(key: string, value: number): void;

        /** Assigns an array of numbers to the passed key as short integers. */
        putShortArray(key: string, value: number[]): void;

        /** Assigns a UTF-8 text to the passed key (max length: 2 GBytes). */
        putText(key: string, value: string): void;

        /** Assigns a UTF-8 string to the passed key (max length: 32 KBytes). */
        putUtfString(key: string, value: string): void;

        /** Assigns an array of UTF-8 strings to the passed key. */
        putUtfStringArray(key: string, value: string[]): void;

        /** Returns the number of elements in this object. */
        size(): number;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/VariableType.html
     *
     * The valid types for User, Room, Buddy and MMOItem Variables to be passed to the respective constructors.
     */
    enum VariableType {
        /** The type of the Variable is boolean. */
        BOOLEAN,

        /** The type of the Variable is number (specifically a double). */
        DOUBLE,

        /** The type of the Variable is number (specifically an integer). */
        INT,

        /** The Variable is null. */
        NULL,

        /** The type of the Variable is SFSArray. */
        SFSARRAY,

        /** The type of the Variable is SFSObject. */
        SFSOBJECT,

        /** The type of the Variable is string. */
        STRING,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/BaseVariable.html
     *
     * Base class for all SmartFoxServer Variable entities on the client.
     */
    class BaseVariable {
        /** Indicates if the Variable is null. */
        readonly isNull: boolean;

        /** Indicates the name of this variable. */
        readonly name: string;

        /**
         * Indicates the type of this Variable. Possibly returned strings are: null, boolean, int, double, string,
         * SFSObject, SFSArray.
         */
        readonly type: string;

        /** Returns the value of this variable. */
        readonly value: boolean | number | string | SFSObject | SFSArray | null;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSBuddyVariable.html
     *
     * The Buddy Variable entity representation on the client.
     */
    class SFSBuddyVariable extends BaseVariable {
        /**
         * The prefix to be added to a Buddy Variable name to make it persistent. A persistent Buddy Variable is made
         * available to all users who have the owner in their Buddy List, whether that Buddy is online or not.
         */
        static readonly OFFLINE_PREFIX: string;

        /**
         * Indicates whether the Buddy Variable is persistent or not.
         *
         * By convention any Buddy Variable whose name starts with the dollar sign ($) will be regarded as persistent
         * and stored locally by the server. Persistent Buddy Variables are also referred to as "offline variables"
         * because they are available to all users who have the owner in their Buddy List, whether that Buddy is online
         * or not.
         */
        readonly isOffline: boolean;

        /**
         * Creates a new SFSBuddyVariable instance.
         *
         * A SFSBuddyVariable is a custom value attached to a SFSBuddy object in a Buddy List that gets automatically
         * synchronized between client and server on every change.
         *
         * Buddy Variables work with the same principle of the User and Room Variables. The only difference is the logic
         * by which they get propagated to other users. While Room and User Variables are usually broadcast to all
         * clients in the same Room, Buddy Variables updates are sent to all users who have the owner of the Buddy
         * Variable in their Buddy Lists.
         *
         * Buddy Variables are particularly useful to store custom user data that must be "visible" to the buddies only,
         * such as a profile, a ranking, a status message, etc. Buddy Variables can be set by means of the
         * SetBuddyVariablesRequest request; they support the following data types (also nested): boolean, number,
         * string, SFSObject, SFSArray. A Buddy Variable can also be null.
         *
         * There is also a special convention that allows Buddy Variables to be set as "offline". Offline Buddy
         * Variables are persistent values which are made available to all users who have the owner in their Buddy List,
         * whether that buddy is online or not. In order to make a Buddy Variable persistent, its name should start with
         * a dollar sign ($). This conventional character is contained in the OFFLINE_PREFIX constant.
         *
         * @param name The name of the Buddy Variable.
         * @param value The value of the Buddy Variable; it can also be null.
         * @param type The type id of the Buddy Variable among those available in the VariableType class. Usually it is
         * not necessary to pass this parameter, as the type is auto-detected from the value.
         */
        constructor(
            name: string,
            value: boolean | number | string | SFSObject | SFSArray | null,
            type: VariableType = -1);

        /**
         * Returns a string that contains the Buddy Variable name, type and value.
         * @returns The string representation of the SFSBuddyVariable object.
         */
        toString(): string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSRoomVariable.html
     *
     * The Room Variable entity representation on the client.
     */
    class SFSRoomVariable extends BaseVariable {
        /**
         * Indicates whether this Room Variable is persistent or not. A persistent Room Variable continues to exist in
         * the Room after the user who created it has left it and until he disconnects.
         *
         * NOTE: setting the isPersistent property manually on an existing Room Variable returned by the API has no
         * effect on the server and can disrupt the API functioning. This flag can be set after the Room Variable object
         * is created using the constructor only.
         */
        isPersistent: boolean;

        /**
         * Indicates whether this Room Variable is private or not. A private Room Variable is visible to all users in
         * the same Room, but it can be modified only by its owner (the user that created it).
         *
         * NOTE: setting the isPrivate property manually on an existing Room Variable returned by the API has no effect
         * on the server and can disrupt the API functioning. This flag can be set after the Room Variable object is
         * created using the constructor only.
         */
        isPrivate: boolean;

        /**
         * Creates a new SFSRoomVariable instance.
         *
         * A SFSRoomVariable is a custom value attached to a SFSRoom object that gets automatically synchronized between
         * client and server on every change.
         *
         * Room Variables are particularly useful to store custom Room data such as a game status and other Room-level
         * informations. They can be set by means of the SetRoomVariablesRequest request; they support the following
         * data types (also nested): boolean, number, string, SFSObject, SFSArray. A Room Variable can also be null.
         *
         * @param name The name of the Room Variable.
         * @param value The value of the Room Variable; it can also be null.
         * @param type The type id of the Room Variable among those available in the VariableType class. Usually it is
         * not necessary to pass this parameter, as the type is auto-detected from the value.
         */
        constructor(
            name: string,
            value: boolean | number | string | SFSObject | SFSArray | null,
            type: VariableType = -1);

        /**
         * Returns a string that contains the Room Variable name, type, value and isPrivate flag.
         * @returns The string representation of the SFSRoomVariable object.
         */
        toString(): string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSUserVariable.html
     *
     * The User Variable entity representation on the client.
     */
    class SFSUserVariable extends BaseVariable {
        /**
         * Indicates whether this User Variable is private or not. A private User Variable is visible only to its owner;
         * any changes made to the variable will be transmitted to the owner only.
         *
         * NOTE: setting the isPrivate property manually on an existing User Variable returned by the API has no effect
         * on the server and can disrupt the API functioning. This flag can be set after the User Variable object is
         * created using the constructor only.
         */
        isPrivate: boolean;

        /**
         * Creates a new SFSUserVariable instance.
         *
         * A SFSUserVariable is a custom value attached to a SFSUser object that gets automatically synchronized between
         * client and server on every change.
         *
         * User Variables are particularly useful to store custom user data that must be "visible" to the other users,
         * such as a profile, a score, a status message, etc. User Variables can be set by means of the
         * SetUserVariablesRequest request; they support the following data types (also nested): boolean, number,
         * string, SFSObject, SFSArray. A User Variable can also be null.
         *
         * @param name The name of the User Variable.
         * @param value The value of the User Variable; it can also be null,
         * @param type The type id of the User Variable among those available in the VariableType class. Usually it is
         * not necessary to pass this parameter, as the type is auto-detected from the value.
         */
        constructor(
            name: string,
            value: boolean | number | string | SFSObject | SFSArray | null,
            type: VariableType = -1);

        /**
         * Returns a string that contains the User Variable name, type, value and isPrivate flag.
         * @returns The string representation of the SFSUserVariable object.
         */
        toString(): string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ReservedBuddyVariables.html
     *
     * The reserved Buddy Variable names used by the Buddy List API.
     */
    enum ReservedBuddyVariables {
        /**
         * The Buddy Variable with this name stores the optional nickname of the user in a buddy list.
         *
         * This variable is persistent, which means that the nickname is preserved upon disconnection.
         */
        BV_NICKNAME,

        /**
         * The Buddy Variable with this name keeps track of the online/offline state of the user in a buddy list.
         *
         * This variable is persistent, which means that the online/offline state is preserved upon disconnection.
         */
        BV_ONLINE,

        /**
         * The Buddy Variable with this name stores the custom state of the user in a buddy list.
         *
         * This variable is persistent, which means that the custom state is preserved upon disconnection.
         */
        BV_STATE,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ReservedRoomVariables.html
     *
     * The reserved Room Variable names used by the Game API.
     */
    enum ReservedRoomVariables {
        /**
         * The Room Variable with this name keeps track of the state (started or stopped) of a game created with the
         * CreateSFSGameRequest request.
         */
        RV_GAME_STARTED,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSBuddy.html
     *
     * The representation of a buddy in the current user's buddy list.
     */
    class SFSBuddy {
        /**
         * Indicates the id of this buddy. This is equal to the id assigned by SmartFoxServer to the corresponding user.
         */
        readonly id: number;

        /**
         * Indicates whether this buddy is blocked in the current user's buddy list or not. A buddy can be blocked by
         * means of a BlockBuddyRequest request.
         */
        readonly isBlocked: number;

        /** Indicates whether this buddy is online in the Buddy List system or not. */
        readonly isOnline: boolean;

        /** Indicates whether this buddy is temporary (non-persistent) in the current user's buddy list or not. */
        readonly isTemp: boolean;

        /** Indicates the name of this buddy. This is equal to the name of the corresponding user. */
        readonly name: string;

        /** Returns the nickname of this buddy. If the nickname is not set, null is returned. */
        readonly nickName: string | null;

        /**
         * Returns the custom state of this buddy. Examples of custom states are "Available", "Busy", "Be right back",
         * etc. If the custom state is not set, null is returned.
         * 
         * The list of available custom states is returned by the SFSBuddyManager.getBuddyStates() method.
         */
        readonly state: string;

        /**
         * Indicates whether this user has the specified Buddy Variable set or not.
         * @param varName The name of the Buddy Variable whose existance must be checked.
         * @returns true if a Buddy Variable with the passed name is set for this buddy.
         */
        containsVariable(varName: string): boolean;

        /**
         * Retrieves the list of persistent Buddy Variables for this buddy.
         * @returns A list of SFSBuddyVariable objects corresponding to the buddy's persistent Buddy Variables.
         */
        getOfflineVariables(): SFSBuddyVariable[];

        /**
         * Retrieves the list of non-persistent Buddy Variables for this buddy.
         * @returns A list of SFSBuddyVariable objects corresponding to the buddy's non-persistent Buddy Variables.
         */
        getOnlineVariables(): SFSBuddyVariable[];

        /**
         * Retrieves a Buddy Variable from its name.
         * @param varName The name of the Buddy Variable to be retrieved.
         * @returns The object representing the Buddy Variable, or null if no Buddy Variable with the passed name is
         * associated to this buddy.
         */
        getVariable(varName: string): SFSBuddyVariable | null;

        /**
         * Retrieves all the Buddy Variables of this user.
         * @returns The list of SFSBuddyVariable objects associated to the buddy.
         */
        getVariables(): SFSBuddyVariable[];

        /**
         * Returns a string that contains the buddy id and name.
         * @returns The string representation of the SFSBuddy object.
         */
        toString(): string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSBuddyManager.html
     *
     * The manager of the current user's Buddy List system.
     */
    class SFSBuddyManager {
        /**
         * Indicates whether the client's Buddy List system is initialized or not. If not, an InitBuddyListRequest
         * request should be sent to the server in order to retrieve the persistent Buddy List data.
         * @returns true if the Buddy List system is initialized in the client.
         */
        readonly isInited: boolean;

        /**
         * Indicates whether a buddy exists in user's buddy list or not.
         * @param name The name of the buddy whose presence in the buddy list is to be checked.
         * @returns true if the specified buddy exists in the buddy list.
         */
        containsBuddy(name: string): boolean;

        /**
         * Retrieves a SFSBuddy object from its id property.
         * @param id The id of the buddy to be retrieved.
         * @returns The SFSBuddy object representing the buddy, or null if no buddy with the passed id exists in the
         * buddy list.
         */
        getBuddyById(id: number): SFSBuddy | null;

        /**
         * Retrieves a SFSBuddy object from its name property.
         * @param name The name of the buddy to be retrieved.
         * @returns The SFSBuddy object representing the buddy, or null if no buddy with the passed name exists in the
         * buddy list.
         */
        getBuddyByName(name: string): SFSBuddy | null;

        /**
         * Retrieves a SFSBuddy object using its nickName property.
         * @param nickName The nickname of the buddy to be found.
         * @returns The SFSBuddy object representing the buddy, or null if no buddy with the passed nickname exists in
         * the buddies list.
         */
        getBuddyByNickName(nickName: string): SFSBuddy | null;

        /**
         * Returns a list of SFSBuddy objects representing all the buddies in the user's buddy list.
         * @returns A list of SFSBuddy objects representing all the buddies.
         */
        getBuddyList(): SFSBuddy[];

        /**
         * Returns a list of strings representing the available custom buddy states.
         *
         * The custom states are received by the client upon initialization of the Buddy List system. They can be
         * configured by means of the SmartFoxServer 2X Administration Tool.
         *
         * @returns The list of available custom buddy states in the Buddy List system.
         */
        getBuddyStates(): string[];

        /**
         * Returns the current user's nickname (if set).
         *
         * If the nickname was never set before, null is returned.
         *
         * As the nickname of a user in a buddy list is handled by means of a reserved Buddy Variable (see
         * ReservedBuddyVariables class), it can be set using the SetBuddyVariablesRequest request.
         *
         * @returns The user nickname in the Buddy List system.
         */
        getMyNickName(): string | null;

        /**
         * Returns the current user's online/offline state.
         *
         * If true, the user appears to be online in the buddy list of other users who have him as a buddy.
         * The online state of a user in a buddy list is handled by means of a reserved Buddy Variable (see
         * ReservedBuddyVariables class); it can be changed using the dedicated GoOnlineRequest request.
         *
         * @returns if the user is online in the Buddy List system.
         */
        getMyOnlineState(): boolean;

        /**
         * Returns the current user's custom state (if set).
         *
         * Examples of custom states are "Available", "Busy", "Be right back", etc. If the custom state was never set
         * before, null is returned.
         *
         * As the custom state of a user in a buddy list is handled by means of a reserved Buddy Variable (see
         * ReservedBuddyVariables class), it can be set using the SetBuddyVariablesRequest request.
         *
         * @returns The user state in the Buddy List system.
         */
        getMyState(): string | null;

        /**
         * Retrieves a Buddy Variable set for the current user from its name.
         * @param varName The name of the Buddy Variable to be retrieved.
         * @returns The SFSBuddyVariable object representing the Buddy Variable, or null if no Buddy Variable with the
         * passed name is associated to the current user.
         */
        getMyVariable(varName: string): SFSBuddyVariable | null;

        /**
         * Returns all the Buddy Variables set for the current user.
         * @returns A list of SFSBuddyVariable objects representing all the Buddy Variables set for the user.
         */
        getMyVariables(): SFSBuddyVariable[];

        /**
         * Returns a list of SFSBuddy objects representing all the offline buddies in the user's buddy list.
         * @returns A list of SFSBuddy objects representing the offline buddies.
         */
        getOfflineBuddies(): SFSBuddy[];

        /**
         * Returns a list of SFSBuddy objects representing all the online buddies in the user's buddy list.
         * @returns A list of SFSBuddy objects representing the online buddies.
         */
        getOnlineBuddies(): SFSBuddy[];
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSRoom.html
     *
     * The SmartFoxServer Room entity representation on the client.
     */
    class SFSRoom {
        /** Returns the maximum amount of users, including spectators, that can be contained in this Room. */
        readonly capacity: number;

        /**
         * Returns the Room Group name. Each Group is identified by a unique string (its name or id) and it represents a
         * different "container" for Rooms.
         *
         * Room Groups enable developers to organize Rooms under different types or categories and let clients select
         * only those Groups they are interested in, in order to receive their events only. This is done via the
         * SubscribeRoomGroupRequest and UnsubscribeRoomGroupRequest requests.
         */
        readonly groupId: string;

        /**
         * Indicates the id of this Room. The id is unique and it is generated by the server when the Room is created.
         */
        readonly id: number;

        /** Indicates whether this is a Game Room or not. */
        readonly isGame: boolean;

        /**
         * Indicates whether this Room is hidden or not. This is a utility flag that can be used by developers to hide
         * certain Rooms from the interface of their application.
         */
        readonly isHidden: boolean;

        /** Indicates whether the client joined this Room or not. Use the JoinRoomRequest request to join a new Room. */
        readonly isJoined: boolean;

        /**
         * Indicates whether this Room requires a password to be joined or not. This flag depends on the Room's
         * password set when the Room is created or by means of the ChangeRoomPasswordStateRequest request.
         */
        readonly isPasswordProtected: boolean;

        /**
         * Returns the maximum number of spectators allowed in this Room (Game Rooms only). If allowed, the
         * maxSpectators value can be changed through the ChangeRoomCapacityRequest request.
         */
        readonly maxSpectators: number;

        /**
         * Returns the maximum number of users allowed in this Room. In case of Game Rooms, this is the maximum number
         * of players. If allowed, the maxUsers value can be changed through the ChangeRoomCapacityRequest request.
         */
        readonly maxUsers: number;

        /**
         * Indicates the name of this Room. Two Rooms in the same Zone can't have the same name. If allowed, the name
         * can be changed through the ChangeRoomNameRequest request.
         */
        readonly name: string;

        /**
         * Defines a generic utility object that can be used to store custom Room data. The values added to this object
         * are for client-side use only and are never transmitted to the server or to the other clients.
         */
        properties: object;

        /** Returns the current number of spectators in this Room (Game Room only). */
        readonly spectatorCount: number;

        /** Returns the current number of users in this Room. In case of Game Rooms, this is the number of players. */
        readonly userCount: number;

        /**
         * Indicates whether the specified user is currently inside this Room or not.
         * @param user The SFSUser object representing the user whose presence in this Room must be checked.
         * @returns true if the user is inside this Room; false otherwise.
         */
        containsUser(user: SFSUser): boolean;

        /**
         * Indicates whether this Room has the specified Room Variable set or not.
         * @param varName The name of the Room Variable whose existance in this Room must be checked.
         * @returns true if a Room Variable with the passed name exists in this Room.
         */
        containsVariable(varName: string): boolean;

        /**
         * Retrieves the list of SFSUser objects representing the players currently inside this Room (Game Rooms only).
         * @returns The list of SFSUser objects representing the users who joined the Room as players.
         */
        getPlayerList(): SFSUser[];

        /**
         * Retrieves a reference to the Room Manager which manages this Room.
         * @returns The Room Manager to which this Room is associated.
         */
        getRoomManager(): SFSRoomManager;

        /**
         * Retrieves the list of SFSUser objects representing the spectators currently inside this Room (Game Rooms
         * only).
         * @returns The list of SFSUser objects representing the users who joined the Room as spectators.
         */
        getSpectatorList(): SFSUser[];

        /**
         * Retrieves a SFSUser object from its id property.
         * @param id The id of the user to be found.
         * @returns An object representing the user, or null if no user with the passed id exists in this Room.
         */
        getUserById(id: number): SFSUser | null;

        /**
         * Retrieves a SFSUser object from its name property.
         * @param name The name of the user to be found.
         * @returns An object representing the user, or null if no user with the passed name exists in this Room.
         */
        getUserByName(name: string): SFSUser | null;

        /**
         * Retrieves the list of SFSUser objects representing all the users currently inside this Room.
         * @returns The list of SFSUser objects representing the users who joined the Room.
         */
        getUserList(): SFSUser[];

        /**
         * Retrieves a Room Variable from its name.
         * @param varName The name of the Room Variable to be retrieved.
         * @returns The object representing the Room Variable, or undefined if no Room Variable with the passed name
         * exists in this Room.
         */
        getVariable(varName: string): SFSRoomVariable | null;

        /**
         * Retrieves all the Room Variables of this Room.
         * @returns The list of SFSRoomVariable objects associated with this Room.
         */
        getVariables(): SFSRoomVariable[];

        /**
         * Returns a string that contains the Room id, name and id of the Group to which it belongs.
         * @returns The string representation of the SFSRoom object.
         */
        toString(): string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSRoomManager.html
     *
     * The manager of the client-side Rooms list.
     */
    class SFSRoomManager {
        /**
         * Indicates whether the specified Group has been subscribed by the client or not.
         * @param groupId The name of the Group.
         * @returns true if the client subscribed the passed Group.
         */
        containsGroup(groupId: string): boolean;

        /**
         * Indicates whether a Room exists in the Rooms list or not.
         * @param idOrName The id or name of the SFSRoom object whose presence in the Rooms list is to be tested.
         * @returns true if the passed Room exists in the Rooms list.
         */
        containsRoom(idOrName: number | string): boolean;

        /**
         * Indicates whether the Rooms list contains a Room belonging to the specified Group or not.
         * @param idOrName The id or name of the SFSRoom object whose presence in the Rooms list is to be tested.
         * @param groupId The name of the Group to which the specified Room must belong.
         * @returns true if the Rooms list contains the passed Room and it belongs to the specified Group.
         */
        containsRoomInGroup(idOrName: number | string, groupId: string): boolean;

        /**
         * Returns a list of Rooms currently joined by the client.
         * @returns The list of SFSRoom objects representing the Rooms currently joined by the client.
         */
        getJoinedRooms(): SFSRoom[];

        /**
         * Retrieves a SFSRoom object from its id property.
         * @param id The id of the Room to be retrieved.
         * @returns The object representing the requested Room; null if no SFSRoom object with the passed id exists in
         * the Rooms list.
         */
        getRoomById(id: number): SFSRoom | null;

        /**
         * Retrieves a SFSRoom object from its name property.
         * @param name The name of the Room to be retrieved.
         * @returns The object representing the requested Room; null if no SFSRoom object with the passed name exists in
         * the Rooms list.
         */
        getRoomByName(name: string): SFSRoom | null;

        /**
         * Returns the current number of Rooms in the Rooms list.
         * @returns The number of Rooms in the Rooms list.
         */
        getRoomCount(): number;

        /**
         * Returns the names of Groups currently subscribed by the client.
         *
         * NOTE: at login time, the client automatically subscribes all the Room Groups specified in the Zone's Default
         * Room Groups setting.
         *
         * @returns A list of Group names.
         */
        getRoomGroups(): string[];

        /**
         * Returns a list of Rooms currently "known" by the client.
         *
         * The list contains all the Rooms that are currently joined and all the Rooms belonging to the Room Groups that
         * have been subscribed.
         *
         * NOTE: at login time, the client automatically subscribes all the Room Groups specified in the Zone's Default
         * Room Groups setting.
         *
         * @returns The list of the available SFSRoom objects.
         */
        getRoomList(): SFSRoom[];

        /**
         * Retrieves the list of Rooms which are part of the specified Room Group.
         * @param groupId The name of the Group.
         * @returns The list of SFSRoom objects belonging to the passed Group.
         */
        getRoomListFromGroup(groupId: string): SFSRoom[];

        /**
         * Retrieves a list of Rooms joined by the specified user.
         *
         * The list contains only those Rooms "known" by the Room Manager; the user might have joined others the client
         * is not aware of.
         *
         * @param user A SFSUser object representing the user to look for in the current Rooms list.
         * @returns The list of Rooms joined by the passed user.
         */
        getUserRooms(user: SFSUser): SFSRoom[];
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSUser.html
     *
     * The representation of a client logged in SmartFoxServer.
     */
    class SFSUser {
        /**
         * Returns the entry point of this user in the current user's AoI.
         *
         * The returned coordinates are those that the user had when his presence in the current user's Area of Interest
         * was last notified by a proximityListUpdate event. This field is populated only if the user joined a Room of
         * type MMORoom and this is configured to receive such data from the server.
         */
        readonly aoiEntryPoint: Vec3D;

        /** Indicates the id of this user. The id is unique and it is generated by the server when the user logs in. */
        readonly id: number;

        /**
         * Indicates whether this user logged in as an administrator or not. Administrator users have the privilegeId
         * property set to UserPrivileges.ADMINISTRATOR.
         */
        readonly isAdmin: boolean;

        /**
         * Indicates whether this user logged in as a guest or not. Guest users have the privilegeId property set to
         * UserPrivileges.GUEST.
         */
        readonly isGuest: boolean;

        /** Indicates if this SFSUser object represents the current client. */
        readonly isItMe: boolean;

        /**
         * Indicates whether this user logged in as a moderator or not. Moderator users have the privilegeId property
         * set to UserPrivileges.MODERATOR.
         */
        readonly isModerator: boolean;

        /**
         * Indicates whether this user is a player (playerId greater than 0) in the last joined Room or not. Non-Game
         * Rooms always return false.
         *
         * If the user is inside multiple Game Rooms at the same time, use the isPlayerInRoom() method.
         */
        readonly isPlayer: boolean;

        /**
         * Indicates whether this user is a spectator (playerId lower than 0) in the last joined Room or not. Non-Game
         * Rooms always return false.
         *
         * If the user is inside multiple Game Rooms at the same time, use the isSpectatorInRoom() method.
         */
        readonly isSpectator: boolean;

        /**
         * Indicates whether this user logged in as a standard user or not. Standard users have the privilegeId property
         * set to UserPrivileges.STANDARD.
         */
        readonly isStandardUser: boolean;

        /** Indicates the name of this user. Two users in the same Zone can't have the same name. */
        readonly name: string;

        /**
         * Returns the id which identifies the privilege level of this user. Privileges are assigned to the user by the
         * server when the user logs in.
         */
        readonly privilegeId: UserPrivileges;

        /**
         * Defines a generic utility object that can be used to store custom user data. The values added to this object
         * are for client-side use only and are never transmitted to the server or to the other clients.
         */
        properties: object;

        /**
         * Indicates whether this user has the specified User Variable set or not.
         * @param varName The name of the User Variable whose existance must be checked.
         * @returns true if a User Variable with the passed name is set for this user.
         */
        containsVariable(varName: string): boolean;

        /**
         * Returns the playerId value of this user in the passed Room. See the playerId property description for more
         * informations.
         * @param room The SFSRoom object representing the Room to retrieve the player id from.
         * @returns The playerId of this user in the passed Room.
         */
        getPlayerId(room: SFSRoom): number;

        /**
         * Returns a reference to the User Manager which manages this user.
         * @returns The User Manager to which this user is associated.
         */
        getUserManager(): SFSUserManager;

        /**
         * Retrieves a User Variable from its name.
         * @param varName The name of the User Variable to be retrieved.
         * @returns The object representing the User Variable, or null if no User Variable with the passed name is
         * associated with this user.
         */
        getVariable(varName: string): SFSUserVariable | null;

        /**
         * Retrieves all the User Variables of this user.
         * @returns The list of SFSUserVariable objects associated with the user.
         */
        getVariables(): SFSUserVariable[];

        /**
         * Indicates whether this user joined the passed Room or not.
         * @param room The SFSRoom object representing the Room where to check the user presence.
         * @returns true if this user is inside the passed Room.
         */
        isJoinedInRoom(room: SFSRoom): boolean;

        /**
         * Indicates whether this user is a player (playerId greater than 0) in the passed Room or not. Non-Game Rooms
         * always return false.
         *
         * If a user can join one Game Rooms at a time only, use the isPlayer property.
         *
         * @param room The SFSRoom object representing the Room where to check if this user is a player.
         * @returns true if this user is a player in the passed Room.
         */
        isPlayerInRoom(room: SFSRoom): boolean;

        /**
         * Indicates whether this user is a spectator (playerId lower than 0) in the passed Room or not. Non-Game Rooms
         * always return false.
         *
         * If a user can join one Game Rooms at a time only, use the isSpectator property.
         *
         * @param room The SFSRoom object representing the Room where to check if this user is a spectator.
         * @returns true if this user is a spectator in the passed Room.
         */
        isSpectatorInRoom(room: SFSRoom): boolean;

        /**
         * Returns a string that contains the user id, name and a boolean indicating if the SFSUser object represents
         * the current client.
         * @returns The string representation of the SFSUser object.
         */
        toString(): string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSUserManager.html
     *
     * The manager of the local (client-side) users list.
     */
    class SFSUserManager {
        /**
         * Indicates whether a user exists in the local users list or not.
         * @param user The SFSUser object representing the user whose presence in the users list is to be tested.
         * @returns true if the passed user exists in the users list.
         */
        containsUser(user: SFSUser): boolean;

        /**
         * Indicates whether a user exists in the local users list or not from the id.
         * @param userId The id of the user whose presence in the users list is to be tested.
         * @returns true if the passed user exists in the users list.
         */
        containsUserId(userId: number): boolean;

        /**
         * Indicates whether a user exists in the local users list or not from the name.
         * @param userName The name of the user whose presence in the users list is to be tested.
         * @returns true if the passed user exists in the users list.
         */
        containsUserName(userName: string): boolean;

        /**
         * Retrieves a SFSUser object from its id property.
         * @param userId The id of the user to be retrieved.
         * @returns The SFSUser object representing the user, or null if no user with the passed id exists in the local
         * users list.
         */
        getUserById(userId: number): SFSUser | null;

        /**
         * Retrieves a SFSUser object from its name property.
         * @param userName The name of the user to be retrieved.
         * @returns The SFSUser object representing the user, or null if no user with the passed name exists in the
         * local users list.
         */
        getUserByName(userName: string): SFSUser | null;

        /**
         * Returns the total number of users in the local users list.
         * @returns The number of users in the local users list.
         */
        getUserCount(): number;

        /**
         * Get the whole list of users inside the Rooms joined by the client.
         * @returns The list of SFSUser objects representing the users in the local users list.
         */
        getUserList(): SFSUser[];
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/MessageRecipientMode.html
     *
     * The recipient/s of moderator and administrator messages.
     */
    class MessageRecipientMode {
        /**
         * The moderator/administrator message will be sent to all the clients who subscribed a specific Room Group.
         *
         * A Group id must be passed as target parameter to the class constructor.
         */
        static readonly TO_GROUP: number;

        /**
         * The moderator/administrator message will be sent to all the users in a specific Room.
         *
         * A SFSRoom instance must be passed as target parameter to the class constructor.
         */
        static readonly TO_ROOM: number;

        /**
         * The moderator/administrator message will be sent to a specific user.
         *
         * A SFSUser instance must be passed as target parameter to the class constructor.
         */
        static readonly TO_USER: number;

        /**
         * The moderator/administrator message will be sent to all the users in the Zone.
         *
         * null can be passed as target parameter, in fact it will be ignored.
         */
        static readonly TO_ZONE: number;

        /** Returns the selected recipient mode. */
        readonly mode: number;

        /** Returns the moderator/administrator message target, according to the selected recipient mode. */
        readonly target: SFSUser | SFSRoom | string | null;

        /**
         * Creates a new MessageRecipientMode instance.
         *
         * The instance must be passed as recipientMode parameter to the ModeratorMessageRequest and AdminMessageRequest
         * classes constructors.
         *
         * @param mode One of the costants contained in this class, describing the recipient mode.
         * @param target The moderator/administrator message recipient/s, according to the selected recipient mode.
         */
        constructor(mode: number, target: SFSUser | SFSRoom | string | null);
    }

    class BaseRequest {
        // Empty.
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/AddBuddyRequest.html
     *
     * Adds a new buddy to the current user's buddy list.
     */
    class AddBuddyRequest extends BaseRequest {
        /**
         * Creates a new AddBuddyRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * In order to add a buddy, the current user must be online in the Buddy List system. If the buddy is added
         * successfully, the operation is confirmed by a buddyAdd event; otherwise the buddyError event is fired.
         *
         * NOTE: this request can be sent if the Buddy List system was previously initialized only (see the
         * InitBuddyListRequest request description).
         *
         * @param buddyName The name of the user to be added as a buddy.
         */
        constructor(buddyName: string);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/AdminMessageRequest.html
     *
     * Sends an administrator message to a specific user or to a group of users.
     */
    class AdminMessageRequest extends BaseRequest {
        /**
         * Creates a new AdminMessageRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request sends an administrator message to a specific user or to a group of users. The current user must
         * have administration privileges to be able to send the message (see the SFSUser.privilegeId property).
         *
         * The recipientMode parameter in the class constructor is used to determine the message recipients: a single
         * user or all the users in a Room, a Group or the entire Zone. Upon message delivery, the clients of the
         * recipient users dispatch the adminMessage event.
         *
         * @param message The message of the administrator to be sent to the target user/s defined by the recipientMode
         * parameter.
         * @param recipientMode An instance of MessageRecipientMode containing the target to which the message should be
         * delivered.
         * @param params An SFSObject containing custom parameters to be sent to the recipient user/s.
         */
        constructor(message: string, recipientMode: MessageRecipientMode, params: SFSObject = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/BanMode.html
     *
     * The available banning modes for a BanUserRequest.
     */
    enum BanMode {
        /** User is banned by IP address. */
        BY_ADDRESS,

        /** User is banned by name. */
        BY_NAME,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/BanUserRequest.html
     *
     * Banishes a user from the server.
     */
    class BanUserRequest extends BaseRequest {
        /**
         * Creates a new BanUserRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request banishes a user from the server. The current user must have administration or moderation
         * privileges in order to be able to ban another user (see the SFSUser.privilegeId property). The user can be
         * banned by name or by IP address (see the BanMode class). Also, the request allows sending a message to the
         * banned user (to make clear the reason of the following disconnection) which is delivered by means of the
         * moderatorMessage event.
         *
         * Differently from the user being kicked (see the KickUserRequest request), a banned user won't be able to
         * connect to the SmartFoxServer instance until the banishment expires (after 24 hours for client-side banning)
         * or an administrator removes his name/IP address from the list of banned users by means of the SmartFoxServer
         * 2X Administration Tool.
         *
         * @param userId The id of the user to be banned.
         * @param message A custom message to be delivered to the user before banning him; if null, the default message
         * configured in the SmartFoxServer 2X Administration Tool is used.
         * @param banMode One of the ban modes defined in the BanMode class.
         * @param delaySeconds The number of seconds after which the user is banned after receiving the ban message.
         * @param durationHours The duration of the banishment, expressed in hours.
         */
        constructor(
            userId: number,
            message: string = null,
            banMode: BanMode = BanMode.BY_NAME,
            delaySeconds: number = 5,
            durationHours: number = 24);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/BlockBuddyRequest.html
     *
     * Blocks or unblocks a buddy in the current user's buddy list.
     */
    class BlockBuddyRequest extends BaseRequest {
        /**
         * Creates a new BlockBuddyRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * Blocked buddies won't be able to see if the user who blocked them is online in their buddy list; they also
         * won't be able to send messages or requests to that user.
         *
         * In order to block a buddy, the current user must be online in the Buddy List system. If the operation is
         * successful, a buddyBlock confirmation event is dispatched; otherwise the buddyError event is fired.
         *
         * NOTE: this request can be sent if the Buddy List system was previously initialized only (see the
         * InitBuddyListRequest request description).
         *
         * @param buddyName The name of the buddy to be removed from the user's buddy list.
         * @param blocked true if the buddy must be blocked; false if he must be unblocked.
         */
        constructor(buddyName: string, blocked: boolean);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/BuddyMessageRequest.html
     *
     * Sends a message to a buddy in the current user's buddy list.
     */
    class BuddyMessageRequest extends BaseRequest {
        /**
         * Creates a new BuddyMessageRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * Messages sent to buddies using the BuddyMessageRequest request are similar to the standard private messages
         * (see the PrivateMessageRequest request) but are specifically designed for the Buddy List system: they don't
         * require any Room parameter, nor they require that users joined a Room. Additionally, buddy messages are
         * subject to specific validation, such as making sure that the recipient is in the sender's buddies list and
         * the sender is not blocked by the recipient.
         *
         * If the operation is successful, a buddyMessage event is dispatched in both the sender and recipient clients.
         *
         * NOTE: this request can be sent if the Buddy List system was previously initialized only (see the
         * InitBuddyListRequest request description).
         *
         * @param message The message to be sent to a buddy.
         * @param targetBuddy The SFSBuddy object corresponding to the message recipient.
         * @param params A SFSObject containing additional custom parameters (e.g. the message color, an emoticon id,
         * etc).
         */
        constructor(message: string, targetBuddy: SFSBuddy, params: SFSObject = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ChangeRoomCapacityRequest.html
     *
     * Changes the maximum number of users and/or spectators who can join a Room.
     */
    class ChangeRoomCapacityRequest extends BaseRequest {
        /**
         * Creates a new ChangeRoomCapacityRequest instance. The instance must be passed to the SmartFox.send() method
         * for the request to be executed.
         *
         * This request changes the maximum number of users and/or spectators who can join a Room. If the operation is
         * successful, the roomCapacityChange event is dispatched to all the users who subscribed the Group to which the
         * target Room belongs,including the requester user himself. If the user is not the creator (owner) of the Room,
         * the roomCapacityChangeError event is fired. An administrator or moderator can override this constrain (he is
         * not requested to be the Room's owner).
         *
         * Please note that some limitations are applied to the passed values (i.e. a client can't set the max users to
         * more than 200,or the max spectators to more than 32). Also, if the Room was configured so that resizing is
         * not allowed (see the RoomSettings.permissions parameter), the request is ignored and no error is fired.
         *
         * In case the Room's capacity is reduced to a value less than the current number of users/spectators inside the
         * Room,exceeding users are NOT disconnected.
         *
         * @param room The Room object corresponding to the Room whose capacity should be changed.
         * @param newMaxUsers The new maximum number of users/players who can join the Room.
         * @param newMaxSpect The new maximum number of spectators who can join the Room (for Game Rooms only).
         */
        constructor(room: SFSRoom, newMaxUsers: number, newMaxSpect: number);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ChangeRoomNameRequest.html
     *
     * Changes the name of a Room.
     */
    class ChangeRoomNameRequest extends BaseRequest {
        /**
         * Creates a new ChangeRoomNameRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * This request changes the name of a Room. If the renaming operation is successful, the roomNameChange event is
         * dispatched to all the users who subscribed the Group to which the target Room belongs, including the user who
         * renamed it. If the user is not the creator (owner) of the Room, or if the new name doesn't match the related
         * criteria in Zone configuration, the roomNameChangeError event is fired. An administrator or moderator can
         * override this constrain (he is not requested to be the Room's owner).
         *
         * If the Room was configured so that renaming is not allowed (see the RoomSettings.permissions parameter), the
         * request is ignored and no error is fired.
         *
         * @param room The SFSRoom object corresponding to the Room whose name should be changed.
         * @param newName The new name to be assigned to the Room.
         */
        constructor(room: SFSRoom, newName: string);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ChangeRoomPasswordStateRequest.html
     *
     * Changes the password of a Room.
     */
    class ChangeRoomPasswordStateRequest extends BaseRequest {
        /**
         * Creates a new ChangeRoomPasswordStateRequest instance. The instance must be passed to the SmartFox.send()
         * method for the request to be executed.
         *
         * This request not only changes the password of a Room, but also its "password state", which indicates if the
         * Room is password protected or not.
         *
         * If the operation is successful, the roomPasswordStateChange event is dispatched to all the users who
         * subscribed the Group to which the target Room belongs, including the requester user himself. If the user is
         * not the creator (owner) of the Room, the roomPasswordStateChangeError event is fired. An administrator or
         * moderator can override this constrain (he is not requested to be the Room's owner).
         *
         * If the Room was configured so that password change is not allowed (see the RoomSettings.permissions
         * parameter), the request is ignored and no error is fired.
         *
         * @param room The SFSRoom object corresponding to the Room whose password should be changed.
         * @param newPass The new password to be assigned to the Room; an empty string or the null value can be passed
         * to remove the Room's password.
         */
        constructor(room: SFSRoom, newPass: string | null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/CreateRoomRequest.html
     *
     * Creates a new Room in the current Zone.
     */
    class CreateRoomRequest extends BaseRequest {
        /**
         * Creates a new CreateRoomRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request creates a new Room in the current Zone. If the creation is successful, a roomAdd event is
         * dispatched to all the users who subscribed the Group to which the Room is associated, including the Room
         * creator. Otherwise, a roomCreationError event is returned to the creator's client.
         *
         * @param settings An object containing the Room configuration settings.
         * @param autoJoin If true, the Room is joined as soon as it is created.
         * @param roomToLeave A SFSRoom object representing the Room that should be left if the new Room is auto-joined.
         */
        constructor(settings: RoomSettings, autoJoin: boolean = false, roomToLeave: SFSRoom = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/CreateSFSGameRequest.html
     *
     * Creates a new public or private Game Room in the current Zone, including player matching criteria, invitations
     * settings and more.
     */
    class CreateSFSGameRequest extends BaseRequest {
        /**
         * Creates a new CreateSFSGameRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * This request creates a new Game Room in the current Zone through the istantiation of a SFSGame object on the
         * server-side, a specialized Room type that provides advanced features during the creation phase of a game.
         * Specific game-configuration settings are passed by means of the SFSGameSettings class.
         *
         * If the creation is successful, a roomAdd event is dispatched to all the users who subscribed the Group to
         * which the Room is associated, including the game creator. Otherwise, a roomCreationError event is returned to
         * the creator's client. Also, if the settings passed in the SFSGameSettings object cause invitations to join
         * the game to be sent, an invitation event is dispatched to all the recipient clients.
         *
         * Check the SmartFoxServer 2X documentation for a more in-depth overview of the GAME API.
         *
         * @param settings An object containing the Game Room configuration settings.
         */
        constructor(settings: SFSGameSettings);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ExtensionRequest.html
     *
     * Sends a command to the server-side Extension attached to the Zone or to a Room.
     */
    class ExtensionRequest extends BaseRequest {
        /**
         * Creates a new ExtensionRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request is used to send custom commands from the client to a server-side Extension, be it a Zone-level
         * or Room-level Extension. Viceversa, the extensionResponse event is used by the server to send Extension
         * commands/responses to the client.
         *
         * Read the SmartFoxServer 2X documentation about server-side Extension for more informations.
         *
         * @param extCmd The name of the command, which identifies an action that should be executed by the server-side
         * Extension.
         * @param params An SFSObject containing custom data to be sent to the Extension. Can be null if no data needs
         * to be sent.
         * @param room If null, the specified command is sent to the current Zone server-side Extension; if not null,
         * the command is sent to the server-side Extension attached to the passed room.
         */
        constructor(extCmd: string, params: SFSObject = null, room: SFSRoom = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/FindRoomsRequest.html
     *
     * Retrieves a list of Rooms from the server which match the specified criteria.
     */
    class FindRoomsRequest extends BaseRequest {
        /**
         * Creates a new FindRoomsRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * By providing a matching expression and a search scope (a Group or the entire Zone), with this request it is
         * possible to find those Rooms matching the passed criteria on the server side and retrieve them by means of
         * the roomFindResult event.
         *
         * @param expr A matching expression that the system will use to retrieve the Rooms.
         * @param groupId The name of the Group where to search for matching Rooms; if null, the search is executed in
         * the whole Zone.
         * @param limit The maximum size of the list of Rooms that will be returned by the roomFindResult event. If 0,
         * all the found Rooms are returned.
         */
        constructor(expr: MatchExpression, groupId: string = null, limit: number = 0);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/FindUsersRequest.html
     *
     * Retrieves a list of users from the server which match the specified criteria.
     */
    class FindUsersRequest extends BaseRequest {
        /**
         * Creates a new FindUsersRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * By providing a matching expression and a search scope (a Room, a Group or the entire Zone), with this request
         * it is possible to find those users matching the passed criteria on the server side and retrieve them by means
         * of the userFindResult event.
         *
         * @param expr A matching expression that the system will use to retrieve the users.
         * @param target The name of a Group or a single SFSRoom object where to search for matching users; if null, the
         * search is executed in the whole Zone.
         * @param limit The maximum size of the list of users that will be returned by the userFindResult event. If 0,
         * all the found users are returned.
         */
        constructor(expr: MatchExpression, target: string | SFSRoom = null, limit: number = 0);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/GoOnlineRequest.html
     *
     * Toggles the current user's online/offline state as buddy in other users' buddy lists.
     */
    class GoOnlineRequest extends BaseRequest {
        /**
         * Creates a new GoOnlineRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * All clients who have the current user as buddy in their buddy list will receive the buddyOnlineStateChange
         * event and see the SFSBuddy.isOnline property return its value accordingly. The same event is also dispatched
         * to the current user, who sent the request, so that the application interface can be updated accordingly.
         * Going online/offline as buddy doesn't affect the user connection, the currently joined Zone and Rooms, etc.
         *
         * The online state of a user in a buddy list is handled by means of a reserved and persistent Buddy Variable.
         *
         * NOTE: this request can be sent if the Buddy List system was previously initialized only (see the
         * InitBuddyListRequest request description).
         *
         * @param online true to make the current user available (online) in the Buddy List system; false to make him
         * not available (offline).
         */
        constructor(online: boolean);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/InitBuddyListRequest.html
     *
     * Initializes the Buddy List system on the current client.
     */
    class InitBuddyListRequest extends BaseRequest {
        /**
         * Creates a new InitBuddyListRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * Buddy List system initialization involves loading any previously stored buddy-specific data from the server,
         * such as the current user's buddy list, his previous state and the persistent Buddy Variables. The
         * initialization request is the first operation to be executed in order to be able to use the Buddy List system
         * features. Once the initialization is completed, the buddyListInit event id fired and the user has access to
         * all his data set previously and he can start to interact with his buddies; if the initialization fails, a
         * buddyError event is fired.
         */
        constructor();
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSInvitation.html
     *
     * The details of an invitation received by the current user.
     */
    class SFSInvitation {
        /** Indicates the id of the invitation. It is generated by the server when the invitation is sent. */
        readonly id: number;

        /** Returns the SFSUser object corresponding to the user who received the invitation. */
        readonly invitee: SFSUser;

        /** Returns the SFSUser object corresponding to the user who sent the invitation. */
        readonly inviter: SFSUser;

        /**
         * Returns a SFSObject containing a custom set of parameters. It usually stores invitation details, like a
         * message to the invitee and any other relevant data.
         */
        readonly params: SFSObject;

        /**
         * Returns the number of seconds available to the invitee to reply to the invitation, after which the invitation
         * expires.
         */
        readonly secondsForAnswer: number;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/InvitationReply.html
     *
     * The possible replies to an invitation.
     */
    enum InvitationReply {
        /** Invitation is accepted. */
        ACCEPT,

        /** Invitation expired. */
        EXPIRED,

        /** Invitation is refused. */
        REFUSE,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/InvitationReplyRequest.html
     *
     * Replies to an invitation received by the current user.
     */
    class InvitationReplyRequest extends BaseRequest {
        /**
         * Creates a new InvitationReplyRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * Users who receive an invitation sent by means of the InviteUsersRequest request can either accept or refuse
         * it using this request. The reply causes an invitationReply event to be dispatched to the inviter; if a reply
         * is not sent, or it is sent after the invitation expiration, the system will react as if the invitation was
         * refused.
         *
         * If an error occurs while the reply is delivered to the inviter user (for example the invitation is already
         * expired), an invitationReplyError event is returned to the current user.
         *
         * @param invitation An instance of the SFSInvitation class containing the invitation details (inviter, custom
         * parameters, etc).
         * @param invitationReply The answer to be sent to the inviter, among those available as constants in the
         * InvitationReply class.
         * @param params A SFSObject containing custom parameters to be returned to the inviter together with the reply
         * (for example a message describing the reason of refusal).
         */
        constructor(invitation: SFSInvitation, invitationReply: InvitationReply, params: SFSObject = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/InviteUsersRequest.html
     *
     * Sends a generic invitation to a list of users.
     */
    class InviteUsersRequest extends BaseRequest {
        /**
         * Creates a new InviteUsersRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request sends a generic invitation to a list of users. Invitations can be used for different purposes,
         * such as requesting users to join a game or visit a specific Room, asking the permission to add them as
         * buddies, etc. Invited users receive the invitation as an invitation event dispatched to their clients: they
         * can accept or refuse it by means of the InvitationReplyRequest request, which must be sent within the
         * specified amount of time.
         *
         * @param invitedUsers A list of SFSUser objects, each representing a user to send the invitation to.
         * @param secondsForAnswer The number of seconds available to each invited user to reply to the invitation
         * (recommended range: 15 to 40 seconds).
         * @param params An SFSObject containing custom parameters containing additional invitation details.
         */
        constructor(invitedUsers: SFSUser[], secondsForAnswer: number, params: SFSObject = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/JoinRoomInvitationRequest.html
     *
     * Sends an invitation to other users/players to join a specific Room.
     */
    class JoinRoomInvitationRequest extends BaseRequest {
        /**
         * Creates a new JoinRoomInvitationRequest instance. The instance must be passed to the SmartFox.send() method
         * for the request to be executed.
         *
         * This request invites other users/players to join a Room. Invited users receive the invitation as an
         * invitation event dispatched to their clients: they can accept or refuse it by means of the
         * InvitationReplyRequest request, which must be sent within the specified amount of time. If the invitation
         * is accepted, the client automatically joins the target Room.
         *
         * Depending on the Room's settings this invitation can be sent by the Room's owner only or by any other user in
         * the Room. This behavior can be set via the RoomSettings.allowOwnerOnlyInvitation parameter.
         *
         * NOTE: spectators in a Game Room are not allowed to invite other users; only players are.
         *
         * An invitation can also specify the amount of time given to each invitee to reply. Default is 30 seconds.
         * A positive answer will attempt to join the user in the designated Room. For Game Rooms the asSpectator flag
         * can be toggled to join the invitee as player or spectator (default = player).
         *
         * There aren't any specific notifications sent back to the inviter after the invitee's response. Users that
         * have accepted the invitation will join the Room while those who didn't reply or turned down the invitation
         * won't generate any event. In order to send specific messages (e.g. chat), just send a private message back to
         * the inviter.
         *
         * @param targetRoom The Room to join (must have free user/player slots).
         * @param invitedUserNames An array of user names to invite.
         * @param params A SFSOobject containing any relevant parameter or message to be sent to the invited users (for
         * example an invitation message).
         * @param expirySeconds The time given to the invitee to reply to the invitation.
         * @param asSpectator In Game Rooms only, indicates if the invited user(s) should join as spectator(s) instead
         * of player(s).
         */
        constructor(
            targetRoom: SFSRoom,
            invitedUserNames: string[],
            params: SFSObject = null,
            expirySeconds: number = 30,
            asSpectator: boolean = false);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/JoinRoomRequest.html
     *
     * Joins the current user in a Room.
     */
    class JoinRoomRequest extends BaseRequest {
        /**
         * Creates a new JoinRoomRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request joins the current user in a Room. If the operation is successful, the current user receives a
         * roomJoin event; otherwise the roomJoinError event is fired. This usually happens when the Room is full, or
         * the password is wrong in case of password protected Rooms.
         *
         * Depending on the Room configuration defined upon its creation (see the RoomSettings.events setting), when the
         * current user joins it, the following events might be fired: userEnterRoom, dispatched to the other users
         * inside the Room to warn them that a new user has arrived; userCountChange, dispatched to all clients which
         * subscribed the Group to which the Room belongs, to update the count of users inside the Room.
         *
         * @param room The id or the name of the Room to be joined. A SFSRoom object can be passed too.
         * @param password The password of the Room, in case it is password protected.
         * @param roomIdToLeave The id of a previously joined Room that the user should leave when joining the new Room.
         * By default, the last joined Room is left; if a negative number is passed, no previous Room is left.
         * @param asSpectator true to join the Room as a spectator (in Game Rooms only).
         */
        constructor(
            room: number | string | SFSRoom,
            password: string = null,
            roomIdToLeave: number = null,
            asSpectator: boolean = false);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/LeaveRoomRequest.html
     *
     * Leaves one of the Rooms joined by the current user.
     */
    class KickUserRequest extends BaseRequest {
        /**
         * Creates a new KickUserRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request kicks a user out of the server. The current user must have administration or moderation
         * privileges in order to be able to kick another user (see the SFSUser.privilegeId property). The request
         * allows sending a message to the kicked user (to make clear the reason of the following disconnection) which
         * is delivered by means of the moderatorMessage event.
         *
         * Differently from the user being banned (see the BanUserRequest request), a kicked user will be able to
         * reconnect to the SmartFoxServer instance immediately.
         *
         * @param userId The id of the user to be kicked.
         * @param message A custom message to be delivered to the user before kicking him; if null, the default message
         * configured in the SmartFoxServer 2X Administration Tool is used.
         * @param delaySeconds The number of seconds after which the user is kicked after receiving the kick message.
         */
        constructor(userId: number, message: string = null, delaySeconds: number = 5);
    }

    class LeaveRoomRequest extends BaseRequest {
        /**
         * Creates a new LeaveRoomRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request makes the current user leave one of the Rooms he joined. Depending on the Room configuration
         * defined upon its creation (see the RoomSettings.events setting), when the user leaves it, the following
         * events might be fired: userExitRoom, dispatched to all the users inside the Room (including the current user
         * then) to warn them that a user has gone away; userCountChange, dispatched to all clients which subscribed the
         * Group to which the Room belongs, to update the count of users inside the Room.
         *
         * @param room The SFSRoom object corresponding to the Room that the current user must leave. If null, the last
         * Room joined by the user is left.
         */
        constructor(room: SFSRoom = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/LoginRequest.html
     *
     * Logs the current user in one of the server Zones.
     */
    class LoginRequest extends BaseRequest {
        /**
         * Creates a new LoginRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This requests logs the current user in one of the server Zones. Each Zone represent an indipendent multiuser
         * application governed by SmartFoxServer. In order to join a Zone, a user name and password are usually
         * required. If the user credentials must be validated, a custom login process should be implemented in the
         * Zone's server-side Extension.
         *
         * Read the SmartFoxServer 2X documentation about the login process for more informations.
         *
         * If the login operation is successful, the current user receives a login event; otherwise the loginError event
         * is fired.
         *
         * @param userName The name to be assigned to the user. If not passed and if the Zone allows guest users, the
         * name is generated automatically by the server.
         * @param password The user password to access the system. SmartFoxServer doesn't offer a default authentication
         * system, so the password must be validated implementing a custom login system in the Zone's server-side
         * Extension.
         * @param params An instance of SFSObject containing custom parameters to be passed to the Zone Extension
         * (requires the custom login system to be active).
         * @param zoneName The name (case-sensitive) of the server Zone to login to; if a Zone name is not specified,
         * the client will use the setting passed to the SmartFox class constructor.
         */
        constructor(
            userName: string = null,
            password: string = null,
            params: SFSObject = null,
            zoneName: string = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/LogoutRequest.html
     *
     * Logs the user out of the current server Zone.
     */
    class LogoutRequest extends BaseRequest {
        /**
         * Creates a new LogoutRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * This request logs the user out of the current server Zone. The user is notified of the logout operation by
         * means of the logout event. This doesn't shut down the connection, so the user will be able to login again in
         * the same Zone or in a different one right after the confirmation event.
         */
        constructor();
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ModeratorMessageRequest.html
     *
     * Sends a moderator message to a specific user or to a group of users.
     */
    class ModeratorMessageRequest extends BaseRequest {
        /**
         * Creates a new ModeratorMessageRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * This request sends a moderator message to a specific user or to a group of users. The current user must have
         * moderation privileges to be able to send the message (see the SFSUser.privilegeId property).
         *
         * The recipientMode parameter in the class constructor is used to determine the message recipients: a single
         * user or all the users in a Room, a Group or the entire Zone. Upon message delivery, the clients of the
         * recipient users dispatch the moderatorMessage event.
         *
         * @param message The message of the moderator to be sent to the target user/s defined by the recipientMode
         * parameter.
         * @param recipientMode An instance of MessageRecipientMode containing the target to which the message should be
         * delivered.
         * @param params A SFSObject containing custom parameters to be sent to the recipient user/s.
         */
        constructor(message: string, recipientMode: MessageRecipientMode, params: SFSObject = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/ObjectMessageRequest.html
     *
     * Sends an object containing custom data to all users in a Room, or a subset of them.
     */
    class ObjectMessageRequest extends BaseRequest {
        /**
         * Creates a new ObjectMessageRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * This request sends an object containing custom data to the users in a Room. The object is delivered to the
         * selected users (or all users excluding the sender) inside the target Room by means of the objectMessage
         * event. It can be useful to send game data, like for example the target coordinates of the user's avatar in a
         * virtual world.
         *
         * @param object A SFSObject containing custom parameters to be sent to the message recipients.
         * @param targetRoom The SFSRoom object corresponding to the Room where the message should be dispatched; if
         * null, the last Room joined by the user is used.
         * @param recipients A list of SFSUser objects corresponding to the message recipients; if null, the message is
         * sent to all users in the target Room (except the sender himself).
         */
        constructor(object: SFSObject, targetRoom: SFSRoom = null, recipients: SFSUser[] = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/PlayerToSpectatorRequest.html
     *
     * Turns the current user from player to spectator in a Game Room.
     */
    class PlayerToSpectatorRequest extends BaseRequest {
        /**
         * Creates a new PlayerToSpectatorRequest instance. The instance must be passed to the SmartFox.send() method
         * for the request to be executed.
         *
         * This request turns the current user from player to spectator in a Game Room. If the operation is successful,
         * all the users in the target Room are notified with the playerToSpectator event. The operation could fail if
         * no spectator slots are available in the Game Room at the time of the request; in this case the
         * playerToSpectatorError event is dispatched to the requester's client.
         *
         * @param targetRoom The SFSRoom object corresponding to the Room in which the player should be turned to
         * spectator. If null, the last Room joined by the user is used.
         */
        constructor(targetRoom: SFSRoom = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/PrivateMessageRequest.html
     *
     * Sends a private chat message.
     */
    class PrivateMessageRequest extends BaseRequest {
        /**
         * Creates a new PrivateMessageRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * Using this request a private message is dispatched to a specific user, who can be in any server Room, or even
         * in no Room at all. The message is delivered by means of the privateMessage event. It is also returned to the
         * sender: this allows showing the messages in the correct order in the application interface. It is also
         * possible to send an optional object together with the message: it can contain custom parameters useful to
         * transmit, for example, additional informations related to the message, like the text font or color, or other
         * formatting details.
         *
         * @param message The message to be sent to to the recipient user.
         * @param recipientId The id of the user to which the message is to be sent.
         * @param params A SFSObject containing additional custom parameters to be sent to the message recipient (for
         * example the color of the text, etc).
         */
        constructor(message: string, recipientId: number, params: SFSObject = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/PublicMessageRequest.html
     *
     * Sends a public chat message.
     */
    class PublicMessageRequest extends BaseRequest {
        /**
         * Creates a new PublicMessageRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * Using this request a public message is dispatched to all the users in the specified Room, including the
         * message sender (this allows showing chat messages in the correct order in the application interface); the
         * corresponding event is the publicMessage event. It is also possible to send an optional object together with
         * the message: it can contain custom parameters useful to transmit, for example, additional informations
         * related to the message, like the text font or color, or other formatting details.
         *
         * In case the target Room is not specified, the message is sent in the last Room joined by the sender.
         *
         * NOTE: the publicMessage event is dispatched if the Room is configured to allow public messaging only (see the
         * RoomSettings.permissions parameter).
         *
         * @param message The message to be sent to all the users in the target Room.
         * @param params A SFSObject containing additional custom parameters to be sent to the message recipients (for
         * example the color of the text, etc).
         * @param targetRoom The SFSRoom object corresponding to the Room where the message should be dispatched; if
         * null, the last Room joined by the user is used.
         */
        constructor(message: string, params: SFSObject = null, targetRoom: SFSRoom = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/QuickJoinGameRequest.html
     *
     * Quickly joins the current user in a public game.
     */
    class QuickJoinGameRequest extends BaseRequest {
        /**
         * Creates a new QuickJoinGameRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * Using this request, by providing a matching expression and a list of Rooms or Groups, SmartFoxServer can
         * search for a matching public Game Room and immediately join the user into that Room as a player.
         *
         * If a game is found and can be joined, the roomJoin event is dispatched to the requester's client.
         *
         * @param matchExpression A matching expression that the system will use to search a Game Room where to join the
         * current user. If null is passed, the first available game Room is joined.
         * @param whereToSearch An array of SFSRoom objects or an array of Group names to which the matching expression
         * should be applied. The maximum number of elements that this array can contain is 32.
         * @param roomToLeave A SFSRoom object representing the Room that the user should leave when joining the game.
         */
        constructor(matchExpression: MatchExpression, whereToSearch: SFSRoom[], roomToLeave: SFSRoom = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/RemoveBuddyRequest.html
     *
     * Removes a buddy from the current user's buddy list.
     */
    class RemoveBuddyRequest extends BaseRequest {
        /**
         * Creates a new RemoveBuddyRequest instance. The instance must be passed to the SmartFox.send() method for the
         * request to be executed.
         *
         * In order to remove a buddy, the current user must be online in the Buddy List system. If the buddy is removed
         * successfully, the operation is confirmed by a buddyRemove event; otherwise the buddyError event is fired.
         *
         * NOTE: this request can be sent if the Buddy List system was previously initialized only (see the
         * InitBuddyListRequest request description).
         *
         * @param buddyName The name of the buddy to be removed from the user's buddy list.
         */
        constructor(buddyName: string);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SetBuddyVariablesRequest.html
     *
     * Sets one or more Buddy Variables for the current user.
     */
    class SetBuddyVariablesRequest extends BaseRequest {
        /**
         * Creates a new SetBuddyVariablesRequest instance. The instance must be passed to the SmartFox.send() method
         * for the request to be executed.
         *
         * This operation updates the SFSBuddy object representing the user in all the buddy lists in which the user was
         * added as a buddy. If the operation is successful, a buddyVariablesUpdate event is dispatched to all the
         * owners of those buddy lists and to the user who updated his variables too.
         *
         * The Buddy Variables can be persisted, which means that their value will be saved even it the user disconnects
         * and it will be restored when he connects again. In order to make a variable persistent, put the constant
         * SFSBuddyVariable.OFFLINE_PREFIX before its name. Read the SmartFoxServer 2X documentaion about the Buddy List
         * API for more informations.
         *
         * NOTE: this request can be sent if the Buddy List system was previously initialized only (see the
         * InitBuddyListRequest request description) and the current user state in the system is "online".
         *
         * @param buddyVariables A list of SFSBuddyVariable objects representing the Buddy Variables to set.
         */
        constructor(buddyVariables: SFSBuddyVariable[]);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SetRoomVariablesRequest.html
     *
     * Sets one or more custom Room Variables in a Room.
     */
    class SetRoomVariablesRequest extends BaseRequest {
        /**
         * Creates a new SetRoomVariablesRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * This request sets one or more custom Room Variables in a Room. When a Room Variable is set, the
         * roomVariablesUpdate event is dispatched to all the users in the target Room, including the user who updated
         * it. Also, if the Room Variable is global (see the SFSRoomVariable class description), the event is dispatched
         * to all users who subscribed the Group to which the target Room is associated.
         *
         * @param roomVariables A list of SFSRoomVariable objects representing the Room Variables to be set.
         * @param room A SFSRoom object representing the Room where to set the Room Variables; if null, the last Room
         * joined by the current user is used.
         */
        constructor(roomVariables: SFSRoomVariable[], room: SFSRoom = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SetUserPositionRequest.html
     *
     * Updates the User position inside an MMORoom.
     */
    class SetUserPositionRequest extends BaseRequest {
        /**
         * Creates a new SetUserPositionRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * MMORooms represent virtual environments and can host any number of users. Based on their position, the system
         * allows users within a certain range from each other (Area of Interest, or AoI) to interact.
         *
         * This request allows the current user to update his position inside the MMORoom, which in turn will trigger a proximityListUpdate event for all users that fall within his AoI.
         *
         * @param pos The user position.
         * @param targetRoom The MMORoom object corresponding to the Room where the position should be set; if null, the
         * last Room joined by the user is used.
         */
        constructor(pos: Vec3D, targetRoom: MMORoom = null);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SetUserVariablesRequest.html
     *
     * Sets one or more custom User Variables for the current user.
     */
    class SetUserVariablesRequest extends BaseRequest {
        /**
         * Creates a new SetUserVariablesRequest instance. The instance must be passed to the SmartFox.send() method for
         * the request to be executed.
         *
         * This request sets one or more User Variables for the current user. When a User Variable is set, the
         * userVariablesUpdate event is dispatched to all the users in all the Rooms joined by the current user,
         * including himself.
         *
         * NOTE: the userVariablesUpdate event is dispatched to users in a specific Room only if it is configured to
         * allow this event (see the RoomSettings.permissions parameter).
         *
         * @param userVariables A list of SFSUserVariable objects representing the User Variables to be set.
         */
        constructor(userVariables: SFSUserVariable[]);
    }

    class SpectatorToPlayerRequest extends BaseRequest {
        // TODO.
    }

    class SubscribeRoomGroupRequest extends BaseRequest {
        // TODO.
    }

    class UnsubsribeRoomGroupRequest extends BaseRequest {
        // TODO.
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/EventDispatcher.html
     *
     * The EventDispatcher class is the base class for all classes that dispatch events.
     */
    class EventDispatcher {
        /**
         * Registers an event listener function that will receive notification of an event.
         * If you no longer need an event listener, remove it by calling the removeEventListener() method, or memory
         * issues could arise. In fact event listeners are not automatically removed from memory.
         *
         * @param evtType The type of event to listen to, among those available in the SFSEvent, SFSBuddyEvent and
         * LoggerEvent classes.
         * @param callback The listener function that processes the event. This function should accept an object as its
         * only parameter, which in turn contains the event parameters.
         * @param scope The object that acts as a context for the event listener: it is the object that acts as a
         * "parent scope" for the callback function, thus providing context (i.e. access to variables and other methods)
         * to the function itself.
         */
        addEventListener(
            evtType: SFSEvent | LoggerEvent,
            callback: (event: object) => void,
            scope: object = null): void;

        /**
         * Removes an event listener.
         * @param evtType The type of event to remove, among those available in the SFSevent, SFSBuddyEvent and
         * LoggerEvent classes.
         * @param callback The listener function to be removed.
         */
        removeEventListener(evtType: SFSEvent | LoggerEvent, callback: (event: object) => void): void;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/LogLevel.html
     *
     * The severity levels of logged messages.
     */
    enum LogLevel {
        /** A DEBUG message is a fine-grained information on the client activity. */
        DEBUG,

        /** An INFO message contains informations on the standard client activities. */
        INFO,

        /**
         * A WARN message is a warning caused by an unexpected behavior of the client.
         *
         * Client operations are not compromised when a warning is raised.
         */
        WARN,

        /**
         * An ERROR message contains informations on a problem that occurred during the client activities.
         *
         * Client operations might be compromised when an error is raised.
         */
        ERROR,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/LoggerEvent.html
     *
     * The event types dispatched by the SmartFoxServer 2X JavaScript API internal logger.
     */
    enum LoggerEvent {
        /**
         * The debug event type, dispatched when a low level message is logged by the SmartFoxServer 2X JavaScript API.
         */
        DEBUG,

        /**
         * The info event type, dispatched when a standard informative message is logged by the SmartFoxServer 2X
         * JavaScript API.
         */
        INFO,

        /** The warn event type, dispatched when a warning message is logged by the SmartFoxServer 2X JavaScript API. */
        WARNING,

        /** The error event type, dispatched when an error message is logged by the SmartFoxServer 2X JavaScript API. */
        ERROR,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/Logger.html
     *
     * The internal logger used by the SmartFoxServer 2X client API. This is a singleton class.
     */
    class Logger extends EventDispatcher {
        /**
         * Indicates whether or not the output of logged messages to the browser's console is enabled.
         *
         * This property has no effect if the "console" object is undefined in the current environment.
         */
        enableConsoleOutput: boolean;

        /** Indicates whether dispatching of log events is enabled or not. */
        enableEventDispatching: boolean;

        /**
         * Gets and sets the current logging level.
         *
         * Debugging messages with a level lower than this value are not logged.
         *
         * The available log levels are contained in the LogLevel class.
         *
         * @default LogLevel.INFO
         */
        level: LogLevel;
    }

    class MMORoom {
        // TODO.
    }

    class MMORoomSettings {
        // TODO.
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/RoomEvents.html
     *
     * A subset of the RoomSettings defining which events related to the Room will be fired by the SmartFox client.
     */
    class RoomEvents {
        /**
         * Sets whether or not the userCountChange event should be dispatched whenever the users (or players+spectators)
         * count changes in the Room.
         */
        allowUserCountChange: boolean;

        /**
         * Sets whether the userEnterRoom event should be dispatched whenever a user joins the Room or not.
         */
        allowUserEnter: boolean;

        /**
         * Sets whether the userExitRoom event should be dispatched whenever a user leaves the Room or not.
         */
        allowUserExit: boolean;

        /**
         * Sets whether or not the userVariablesUpdate event should be dispatched whenever a user in the Room updates
         * his User Variables.
         */
        allowUserVariablesUpdate: boolean;

        /**
         * Creates a new RoomEvents instance.
         *
         * The RoomSettings.events property must be set to this instance during Room creation.
         */
        constructor();
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/RoomExtension.html
     *
     * A subset of the RoomSettings defining which server-side Extension should be attached to the Room upon creation.
     */
    class RoomExtension {
        /** Returns the fully qualified name of the main class of the Extension. */
        className: string;

        /**
         * Returns the name of the Extension to be attached to the Room.
         *
         * It's the name of the server-side folder containing the Extension classes inside the main
         * [sfs2x-install-folder]/SFS2X/extensions folder.
         */
        id: string;

        /**
         * Sets the name of an optional properties file that should be loaded on the server-side during the Extension
         * initialization.
         *
         * The file must be located in the server-side folder containing the Extension classes (see the id property).
         *
         * @default ""
         */
        propertiesFile: string;

        /**
         * Creates a new RoomExtension instance.
         *
         * The RoomSettings.extension property must be set to this instance during Room creation.
         *
         * @param id The name of the Extension as deployed on the server; it's the name of the folder containing the
         * Extension classes inside the main [sfs2x-install-folder]/SFS2X/extensions folder.
         * @param className The fully qualified name of the main class of the Extension.
         */
        constructor(id: string, className: string);
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/RoomPermissions.html
     *
     * A subset of the RoomSettings defining which operations users will be able to execute on the Room after its
     * creation.
     */
    class RoomPermissions {
        /**
         * Sets whether changing the Room name after its creation is allowed or not.
         *
         * The Room name can be changed by means of the ChangeRoomNameRequest request.
         * @default false
         */
        allowNameChange: boolean;

        /**
         * Sets whether changing (or removing) the Room password after its creation is allowed or not.
         *
         * The Room password can be changed by means of the ChangeRoomPasswordStateRequest request.
         * @default false
         */
        allowPasswordStateChange: boolean;

        /**
         * Sets whether users inside the Room are allowed to send public messages or not.
         *
         * Public messages can be sent by means of the PublicMessageRequest request.
         * @default true
         */
        allowPublicMessages: boolean;

        /**
         * Sets whether the Room capacity can be changed after its creation or not.
         *
         * The capacity is the maximum number of users and spectators (in Game Rooms) allowed to enter the Room. It can
         * be changed by means of the ChangeRoomCapacityRequest request.
         * @default false
         */
        allowResizing: boolean;

        /**
         * Creates a new RoomPermissions instance.
         *
         * The RoomSettings.permissions property must be set to this instance during Room creation.
         */
        constructor();
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/RoomProperties.html
     *
     * The predefined properties that can be used in matching expressions to search/filter Rooms.
     */
    class RoomProperties {
        /**
         * The name of the Group to which the Room belongs.
         *
         * Requires a StringMatch instance to be used for values comparison.
         */
        static readonly GROUP_ID: string;

        /**
         * The Room has at least one free player slot.
         *
         * Requires a BoolMatch instance to be used for values comparison.
         */
        static readonly HAS_FREE_PLAYER_SLOTS: string;

        /**
         * The Room is a Game Room.
         *
         * Requires a BoolMatch instance to be used for values comparison.
         */
        static readonly IS_GAME: string;

        /**
         * The Room is private.
         *
         * Requires a BoolMatch instance to be used for values comparison.
         */
        static readonly IS_PRIVATE: string;

        /**
         * The Room is an SFSGame on the server-side.
         *
         * Requires a BoolMatch instance to be used for values comparison.
         */
        static readonly IS_TYPE_SFSGAME: string;

        /**
         * The maximum number of spectators allowed in the Room (Game Rooms only).
         *
         * Requires a NumberMatch instance to be used for values comparison.
         */
        static readonly MAX_SPECTATORS: string;

        /**
         * The maximum number of users allowed in the Room (players in Game Rooms).
         *
         * Requires a NumberMatch instance to be used for values comparison.
         */
        static readonly MAX_USERS: string;

        /**
         * The Room name.
         *
         * Requires a StringMatch instance to be used for values comparison.
         */
        static readonly NAME: string;

        /**
         * The Room spectators count (Game Rooms only).
         *
         * Requires a NumberMatch instance to be used for values comparison.
         */
        static readonly SPECTATOR_COUNT: string;

        /**
         * The Room users count (players in Game Rooms).
         *
         * Requires a NumberMatch instance to be used for values comparison.
         */
        static readonly USER_COUNT: string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/RoomSettings.html
     *
     * The settings required to create a Room using the CreateRoomRequest request.
     */
    class RoomSettings {
        /**
         * Specifies if the Room allows "Join Room" invitations to be sent by any user or just by its owner.
         * @default true
         */
        allowOwnerOnlyInvitation: boolean;

        /**
         * Sets the flags indicating which events related to the Room are dispatched by the SmartFox client.
         *
         * Room events include: users entering or leaving the room, user count change and user variables update. If set
         * to null, the events configured on the server-side are used (see the SmartFoxServer 2X Administration Tool
         * documentation).
         *
         * @default null
         */
        events: RoomEvents | null;

        /**
         * Sets the Extension that must be attached to the Room on the server-side, and its settings.
         * @default null
         */
        extension: RoomExtension | null;

        /**
         * Sets the id of the Group to which the Room should belong.
         *
         * If the Group doesn't exist yet, a new one is created before assigning the Room to it.
         * @default "default"
         */
        groupId: string;

        /**
         * Sets whether the Room is a Game Room or not.
         * @default false
         */
        isGame: boolean;

        /**
         * Sets the maximum number of spectators allowed in the Room (only for Game Rooms).
         * @default 0
         */
        maxSpectators: number;

        /**
         * Sets the maximum number of users allowed in the Room.
         *
         * In case of Game Rooms, this is the maximum number of players.
         *
         * @default 10
         */
        maxUsers: number;

        /**
         * Sets the maximum number of Room Variables allowed for the Room.
         * @default 5
         */
        maxVariables: number;

        /**
         * Defines the name of the Room.
         */
        name: string;

        /**
         * Sets the password of the Room.
         *
         * If the password is set to an empty string, the Room won't be password protected.
         *
         * @default ""
         */
        password: string;

        /**
         * Sets the flags indicating which operations are permitted on the Room.
         *
         * Permissions include: name and password change, maximum users change and public messaging. If set to null, the
         * permissions configured on the server-side are used (see the SmartFoxServer 2X Administration Tool
         * documentation).
         *
         * @default null
         */
        permissions: RoomPermissions | null;

        /**
         * Sets a list of SFSRooomVariable objects to be attached to the Room.
         * @default []
         */
        variables: SFSRoomVariable[];

        /**
         * Creates a new RoomSettings instance.
         *
         * The instance must be passed to the CreateRoomRequest class constructor.
         *
         * @param name The name of the Room to be created.
         */
        constructor(name: string);
    }

    class SFSGameSettings {
        // TODO.
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/LogicOperator.html
     *
     * Concatenate two matching expressions using the AND or OR logical operators.
     */
    class LogicOperator {
        /** An instance of LogicOperator representing the AND logical operator. */
        static readonly AND: LogicOperator;

        /** An instance of LogicOperator representing the OR logical operator. */
        static readonly OR: LogicOperator;

        /** Returns the id of the current LogicOperator instance. It can be the string "AND" or "OR". */
        readonly id: string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/MatchExpression.html
     *
     * A matching expression used to compare custom variables or predefined properties when searching for users or
     * Rooms.
     */
    class MatchExpression {
        /**
         * Returns the matching criteria used during values comparison among those provided by the BoolMatch,
         * NumberMatch and StringMatch classes.
         */
        readonly condition: Matcher;

        /** In case of concatenated expressions, returns the current logical operator. */
        readonly logicOp: LogicOperator;

        /** Returns the next matching expression concatenated to the current one, if existing. */
        readonly next: MatchExpression;

        /** Returns the value against which the variable or property corresponding to varName is compared. */
        readonly value: boolean | number | string;

        /**
         * Returns the name of the variable or property against which the comparison is made.
         *
         * Depending what the matching expression is used for (searching a user or a Room), this can be the name of a
         * User Variable or a Room Variable, or it can be one of the constants contained in the UserProperties or
         * RoomProperties classes, representing some of the predefined properties of the user and Room entities
         * respectively.
         */
        readonly varName: string;

        /**
         * Creates a new MatchExpression instance.
         *
         * Matching expression are used to compare custom variables or predefined properties when searching for users or
         * Rooms. They are built like "if" statements in any common programming language. They work like queries in a
         * database and can be used to search for Rooms or users using custom criteria: in fact a matching expression
         * can compare predefined properties of the Room and user entities (see the RoomProperties and UserProperties
         * classes), but also custom Room or User Variables.
         *
         * These expressions are easy to create and concatenate, and they can be used for many different filtering
         * operations within the SmartFoxServer 2X framework, for example to invite players to join a game (see the
         * CreateSFSGameRequest request description), to look for specific Rooms or users (see the FindRoomsRequest and
         * FindUsersRequest requests descriptions), etc.
         *
         * @param varName The name of the variable or property to match.
         * @param condition A matching condition among those provided by the BoolMatch, NumberMatch and StringMatch
         * classes.
         * @param value The value to compare against the variable or property during the matching.
         */
        constructor(varName: string, condition: Matcher, value: boolean | number | string);

        /**
         * Concatenates the current expression with a new one using the logical AND operator.
         * @param varName Name of the additional variable or property to match.
         * @param condition The additional matching condition among those provided by the BoolMatch, NumberMatch and
         * StringMatch classes.
         * @param value The value to compare against the additional variable or property during the matching.
         * @returns A new MatchExpression resulting from the concatenation of the current expression with a new one
         * generated from the specified parameters.
         */
        and(varName: string, condition: Matcher, value: boolean | number | string): MatchExpression;

        /**
         * Checks if the current matching expression is concatenated to another one through a logical operator.
         * @returns true if the current matching expression is concatenated to another one.
         */
        hasNext(): boolean;

        /**
         * Concatenates the current expression with a new one using the logical OR operator.
         * @param varName Name of the additional variable or property to match.
         * @param condition The additional matching condition among those provided by the BoolMatch, NumberMatch and
         * StringMatch classes.
         * @param value The value to compare against the additional variable or property during the matching.
         * @returns A new MatchExpression resulting from the concatenation of the current expression with a new one
         * generated from the specified parameters.
         */
        or(varName: string, condition: Matcher, value: boolean | number | string): MatchExpression;

        /**
         * Moves the iterator cursor to the first matching expression in the chain.
         * @returns The MatchExpression object at the top of the chain of matching expressions.
         */
        rewind(): MatchExpression;

        /**
         * Returns a string representation of the matching expression.
         * @returns The string representation of the MatchExpression object.
         */
        toString(): string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/Matcher.html
     *
     * The base class for conditions in matching expressions.
     */
    class Matcher {
        /** Returns the condition symbol of this matcher. */
        readonly symbol: string;

        /** Returns the type id of this matcher. */
        readonly type: number;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/BoolMatch.html
     *
     * Check boolean conditions in matching expressions.
     */
    class BoolMatch extends Matcher {
        /** An instance of BoolMatch representing the following condition: bool1 == bool2. */
        static readonly EQUALS: BoolMatch;

        /** An instance of BoolMatch representing the following condition: bool1 != bool2. */
        static readonly NOT_EQUALS: BoolMatch;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/NumberMatch.html
     *
     * Check numeric conditions in matching expressions.
     */
    class NumberMatch extends Matcher {
        /** An instance of NumberMatch representing the following condition: number1 == number2. */
        static readonly EQUALS: NumberMatch;

        /** An instance of NumberMatch representing the following condition: number1 > number2. */
        static readonly GREATER_THAN: NumberMatch;

        /** An instance of NumberMatch representing the following condition: number1 >= number2. */
        static readonly GREATER_THAN_OR_EQUAL_TO: NumberMatch;

        /** An instance of NumberMatch representing the following condition: number1 < number2. */
        static readonly LESS_THAN: NumberMatch;

        /** An instance of NumberMatch representing the following condition: number1 <= number2. */
        static readonly LESS_THAN_OR_EQUAL_TO: NumberMatch;

        /** An instance of NumberMatch representing the following condition: number1 != number2. */
        static readonly NOT_EQUALS: NumberMatch;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/StringMatch.html
     *
     * Check string conditions in matching expressions.
     */
    class StringMatch extends Matcher {
        /** An instance of StringMatch representing the following condition: string1.indexOf(string2) != -1. */
        static readonly CONTAINS: StringMatch;

        /**
         * An instance of StringMatch representing the following condition: string1 ends with characters contained in
         * string2.
         */
        static readonly ENDS_WITH: StringMatch;

        /** An instance of StringMatch representing the following condition: string1 == string2. */
        static readonly EQUALS: StringMatch;

        /** An instance of StringMatch representing the following condition: string1 != string2. */
        static readonly NOT_EQUALS: StringMatch;

        /**
         * An instance of StringMatch representing the following condition: string1 starts with characters contained in
         * string2.
         */
        static readonly STARTS_WITH: StringMatch;
    }

    interface SmartFoxConfig {
        /** The IP address or host name of the SmartFoxServer 2X instance to connect to. */
        host?: string;

        /** The WebSocket port of the SmartFoxServer 2X instance to connect to. */
        port?: number;

        /** Use an encrypted SSL connection (WebSocket Secure). */
        useSSL?: boolean;

        /** The Zone of the SmartFoxServer 2X instance to join during the login process. */
        zone?: string;

        /** Indicates whether the client-server messages console debug should be enabled or not. */
        debug?: boolean;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SmartFox.html
     *
     * The SmartFoxServer 2X JavaScript API main class.
     */
    class SmartFox extends EventDispatcher {
        /**
         * Returns a reference to the Buddy Manager.
         *
         * This manager is used internally by the SmartFoxServer 2X API; the reference returned by this property gives
         * access to the buddies list, allowing interaction with Buddy and BuddyVariable objects and access to user
         * properties in the Buddy List system.
         */
        readonly buddyManager: SFSBuddyManager;

        /** Returns the client configuration object passed during the SmartFox instance creation. */
        readonly config: SmartFoxConfig;

        /**
         * Indicates whether the client-server messages console debug is enabled or not.
         *
         * If set to true, detailed debugging informations for all the incoming and outgoing messages are provided in
         * the browser's debug console (if available). Debugging can be enabled when instantiating the SmartFox class
         * too by means of the configuration object.
         */
        debug: boolean;

        /** Indicates whether the client is connected to the server or not. */
        readonly isConnected: boolean;

        /**
         * Returns the object representing the last Room joined by the client, if any.
         *
         * This property is null if no Room was joined.
         */
        readonly lastJoinedRoom: SFSRoom | null;

        /** Returns a reference to the internal Logger instance used by SmartFoxServer 2X. */
        readonly logger: Logger;

        /**
         * Returns the maximum size of messages allowed by the server.
         *
         * Any request exceeding this size will not be sent. The value is determined by the server configuration.
         */
        readonly maxMessageSize: number;

        /**
         * Returns the SFSUser object representing the client itself when connected to a SmartFoxServer 2X instance.
         *
         * This object is generated upon successful login only, so it is null if login was not performed yet.
         *
         * NOTE: setting the mySelf property manually can disrupt the API functioning.
         */
        readonly mySelf: SFSUser | null;

        /**
         * Returns a reference to the Room Manager.
         *
         * This manager is used internally by the SmartFoxServer 2X API; the reference returned by this property gives
         * access to the Rooms list and Groups, allowing interaction with SFSRoom objects.
         */
        readonly roomManager: SFSRoomManager;

        /**
         * Returns the unique session token of the client.
         *
         * The session token is a string sent by the server to the client after the initial handshake. It is required as
         * mean of identification when uploading files to the server (see specific documentation).
         */
        readonly sessionToken: string;

        /**
         * Returns a reference to the User Manager.
         *
         * This manager is used internally by the SmartFoxServer 2X API; the reference returned by this property gives
         * access to the users list, allowing interaction with SFSUser objects.
         */
        readonly userManager: SFSUserManager;

        /** Returns the current version of the SmartFoxServer 2X JavaScript API. */
        readonly version: string;

        /**
         * Creates a new SmartFox instance.
         *
         * The SmartFox class is responsible for connecting the client to a SmartFoxServer instance and for dispatching
         * all asynchronous events. Developers always interact with SmartFoxServer through this class.
         *
         * For detailed informations please check our website: http://www.smartfoxserver.com.
         *
         * @param configObj The client configuration data.
         */
        constructor(configObj: SmartFoxConfig = null);

        /**
         * Establishes a connection between the client and a SmartFoxServer 2X instance.
         *
         * If one or more arguments are missing, the client will use the corresponding settings passed during the
         * SmartFox class instantiation.
         *
         * @param host The address of the server to connect to.
         * @param port The TCP port to connect to.
         * @param useSSL Use an encrypted SSL connection.
         */
        connect(host: string = null, port: number = -1, useSSL: boolean = null): void;

        /** Closes the connection between the client and the SmartFoxServer 2X instance. */
        disconnect(): void;

        /**
         * Enables the automatic realtime monitoring of the lag between the client and the server (round robin).
         *
         * When turned on, the pingPong event type is dispatched continuously, providing the average of the last ten
         * measured lag values. The lag monitoring is automatically halted when the user logs out of a Zone or gets
         * disconnected.
         *
         * NOTE: the lag monitoring can be enabled after the login has been completed successfully only.
         *
         * @param enabled The lag monitoring status: true to start the monitoring, false to stop it.
         * @param interval The amount of seconds to wait between each query (recommended 3-4s).
         * @param queueSize The amount of values stored temporarily and used to calculate the average lag.
         */
        enableLagMonitor(enabled: boolean, interval: number = 4, queueSize: number = 10): void;

        /**
         * Returns a list of SFSRoom objects representing the Rooms currently joined by the client.
         *
         * NOTE: the same list is returned by the SFSRoomManager.getJoinedRooms() method, accessible through the
         * roomManager property; this was replicated on the SmartFox class for handy access due to its usually frequent
         * usage.
         *
         * @returns The list of SFSRoom objects representing the Rooms joined by the client.
         */
        getJoinedRooms(): SFSRoom[];

        /**
         * Retrieves a SFSRoom object from its id.
         *
         * NOTE: the same object is returned by the SFSRoomManager.getRoomById() method, accessible through the
         * roomManager property; this was replicated on the SmartFox class for handy access due to its usually frequent
         * usage.
         *
         * @param id The id of the Room.
         * @returns The object representing the requested Room; null if no SFSRoom object with the passed id exists in
         * the Rooms list.
         */
        getRoomById(id: number): SFSRoom | null;

        /**
         * Retrieves a SFSRoom object from its name.
         *
         * NOTE: the same object is returned by the SFSRoomManager.getRoomByName() method, accessible through the
         * roomManager property; this was replicated on the SmartFox class for handy access due to its usually frequent
         * usage.
         *
         * @param name The name of the Room.
         * @returns The object representing the requested Room; null if no SFSRoom object with the passed name exists in
         * the Rooms list.
         */
        getRoomByName(name: string): SFSRoom | null;

        /**
         * Returns the list of SFSRoom objects representing the Rooms currently "watched" by the client.
         *
         * The list contains all the Rooms that are currently joined and all the Rooms belonging to the Room Groups that
         * have been subscribed by the client.
         *
         * NOTE 1: at login time, the client automatically subscribes all the Room Groups specified in the Zone's
         * Default Room Groups setting.
         *
         * NOTE 2: the same list is returned by the SFSRoomManager.getRoomList() method, accessible through the
         * roomManager property; this was replicated on the SmartFox class for handy access due to its usually frequent
         * usage.
         *
         * @returns The list of SFSRoom objects representing the Rooms available on the client.
         */
        getRoomList(): SFSRoom[];

        /**
         * Retrieves the list of Rooms which are part of the specified Room Group.
         *
         * NOTE: the same list is returned by the SFSRoomManager.getRoomListFromGroup() method, accessible through the
         * roomManager property; this was replicated on the SmartFox class for handy access due to its usually frequent
         * usage.
         *
         * @param groupId The name of the Group.
         * @returns The list of SFSRoom objects belonging to the passed Group.
         */
        getRoomListFromGroup(groupId: string): SFSRoom[];

        /**
         * Sends a request to the server.
         * @param request A request object.
         */
        send(request: BaseRequest): void;

        /**
         * Allows to specify custom client details that will be used to gather statistics about the client platform via
         * the AdminTool's Analytics Module.
         *
         * By default no details are sent and the client type is the generic "JavaScript".
         *
         * NOTE: this method must be called before the connection is started. The length of the two strings combined
         * must be less than 512 characters.
         *
         * @param platformId An identification string for the client, like the browser name for example.
         * @param version An additional string to describe the client version, like the browser version for example.
         */
        setClientDetails(platformId: string, version: string): void;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/UserPrivileges.html
     *
     * The default user types known by SmartFoxServer.
     */
    enum UserPrivileges {
        /** The administrator user can send dedicated "administrator messages", kick and ban users. */
        ADMINISTRATOR,

        /** The Guest user is usually the lowest level in the privilege profiles scale. */
        GUEST,

        /** The moderator user can send dedicated "moderator messages", kick and ban users. */
        MODERATOR,

        /**
         * The standard user is usually registered in the application custom login system; uses a unique name and
         * password to login.
         */
        STANDARD,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/UserProperties.html
     * The predefined properties that can be used in matching expressions to search/filter users.
     */
    class UserProperties {
        /** The user joined at least one Room. */
        static readonly IS_IN_ANY_ROOM: string;

        /** The user is a Non-Player Character (NPC). */
        static readonly IS_NPC: string;

        /** The user is a player in a Game Room. */
        static readonly IS_PLAYER: string;

        /** The user is a spectator in a Game Room. */
        static readonly IS_SPECTATOR: string;

        /** The Room name. */
        static readonly NAME: string;

        /** The user privilege id. */
        static readonly PRIVILEGE_ID: string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/Vec3D.html
     *
     * The position in a 2D or 3D space.
     */
    class Vec3D {
        /** Returns the position along the X axis. */
        px: number;

        /** Returns the position along the Y axis. */
        py: number;

        /** Returns the position along the Z axis. */
        pz: number;

        /**
         * Creates a new Vec3D instance.
         *
         * The position along the Z axis is optional for 2D environments.
         *
         * The useFloats parameter can be used to force the API send the coordinates as floating point values when
         * setting the user position (see the SetUserPositionRequest request) or creating an MMORoom.
         *
         * This must be set accordingly to the server side setting of the MMORoom and consistently through the client.
         *
         * @param px The position along the X axis.
         * @param py The position along the Y axis.
         * @param pz The position along the Z axis.
         * @param useFloats Force the coordinates to e sent as floating point values to the server.
         */
        constructor(px: number, py: number, pz: number = 0, useFloats: boolean = false);
    }
}