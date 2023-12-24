// Store the references to globals in case someone tries to monkey patch these, causing the below
// to de-opt (this occurs often when using popular extensions).
export var is_array = Array.isArray;
export var array_from = Array.from;
export var object_keys = Object.keys;
export var object_entries = Object.entries;
export var object_assign = Object.assign;
export var define_property = Object.defineProperty;
export var get_descriptor = Object.getOwnPropertyDescriptor;
export var get_descriptors = Object.getOwnPropertyDescriptors;

/**
 * @param {any} thing
 * @returns {thing is Function}
 */
export function is_function(thing) {
	return typeof thing === 'function';
}

/**
 * TODO: Do the types matter on this? If so, can we improve them so that
 * `shallow_thunk(['one', 2])` returns a tuple type instead of a union?
 * @template {unknown} T
 * @param {Iterable<T>} iterable
 * @returns {(() => T)[]}
 */
function shallow_thunk(iterable) {
	const thunks = [];
	for (const item of iterable) {
		thunks.push(() => item);
	}
	return thunks;
}
