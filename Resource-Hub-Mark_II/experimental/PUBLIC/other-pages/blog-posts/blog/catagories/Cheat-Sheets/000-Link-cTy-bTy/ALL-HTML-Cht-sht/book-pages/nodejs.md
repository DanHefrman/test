&lt;

Resource
--------

### Online

-   [Official Website](http://nodejs.org/)

### Related

-   [JavaScript](javascript.html "JavaScript Cheat Sheet")

Basic
-----

### Global Objects

-   [global](http://nodejs.org/api/globals.html#globals_global)
-   [process](http://nodejs.org/api/globals.html#globals_process)
-   [console](http://nodejs.org/api/globals.html#globals_console)
-   [Class: Buffer](http://nodejs.org/api/globals.html#globals_class_buffer)
-   [require()](http://nodejs.org/api/globals.html#globals_require)
-   [require.resolve()](http://nodejs.org/api/globals.html#globals_require_resolve)
-   [require.cache](http://nodejs.org/api/globals.html#globals_require_cache)
-   [require.extensions](http://nodejs.org/api/globals.html#globals_require_extensions)
-   [\_\_filename](http://nodejs.org/api/globals.html#globals_filename)
-   [\_\_dirname](http://nodejs.org/api/globals.html#globals_dirname)
-   [module](http://nodejs.org/api/globals.html#globals_module)
-   [exports](http://nodejs.org/api/globals.html#globals_exports)
-   [setTimeout(cb, ms)](http://nodejs.org/api/globals.html#globals_settimeout_cb_ms)
-   [clearTimeout(t)](http://nodejs.org/api/globals.html#globals_cleartimeout_t)
-   [setInterval(cb, ms)](http://nodejs.org/api/globals.html#globals_setinterval_cb_ms)
-   [clearInterval(t)](http://nodejs.org/api/globals.html#globals_clearinterval_t)

### console

-   [console.log(\[data\], \[...\])](http://nodejs.org/api/stdio.html#stdio_console_log_data)
-   [console.info(\[data\], \[...\])](http://nodejs.org/api/stdio.html#stdio_console_info_data)
-   [console.error(\[data\], \[...\])](http://nodejs.org/api/stdio.html#stdio_console_error_data)
-   [console.warn(\[data\], \[...\])](http://nodejs.org/api/stdio.html#stdio_console_warn_data)
-   [console.dir(obj)](http://nodejs.org/api/stdio.html#stdio_console_dir_obj)
-   [console.time(label)](http://nodejs.org/api/stdio.html#stdio_console_time_label)
-   [console.timeEnd(label)](http://nodejs.org/api/stdio.html#stdio_console_timeend_label)
-   [console.trace(label)](http://nodejs.org/api/stdio.html#stdio_console_trace_label)
-   [console.assert(expression, \[message\])](http://nodejs.org/api/stdio.html#stdio_console_assert_expression_message)

### Timers

-   [setTimeout(callback, delay, \[arg\], \[...\])](http://nodejs.org/api/timers.html#timers_settimeout_callback_delay_arg)
-   [clearTimeout(timeoutId)](http://nodejs.org/api/timers.html#timers_cleartimeout_timeoutid)
-   [setInterval(callback, delay, \[arg\], \[...\])](http://nodejs.org/api/timers.html#timers_setinterval_callback_delay_arg)
-   [clearInterval(intervalId)](http://nodejs.org/api/timers.html#timers_clearinterval_intervalid)

### Util

-   [util.format(format, \[...\])](http://nodejs.org/api/util.html#util_util_format_format)
-   [util.debug(string)](http://nodejs.org/api/util.html#util_util_debug_string)
-   [util.error(\[...\])](http://nodejs.org/api/util.html#util_util_error)
-   [util.puts(\[...\])](http://nodejs.org/api/util.html#util_util_puts)
-   [util.print(\[...\])](http://nodejs.org/api/util.html#util_util_print)
-   [util.log(string)](http://nodejs.org/api/util.html#util_util_log_string)
-   [util.inspect(object, \[showHidden\], \[depth\], \[colors\])](http://nodejs.org/api/util.html#util_util_inspect_object_showhidden_depth_colors)
-   [util.isArray(object)](http://nodejs.org/api/util.html#util_util_isarray_object)
-   [util.isRegExp(object)](http://nodejs.org/api/util.html#util_util_isregexp_object)
-   [util.isDate(object)](http://nodejs.org/api/util.html#util_util_isdate_object)
-   [util.isError(object)](http://nodejs.org/api/util.html#util_util_iserror_object)
-   [util.pump(readableStream, writableStream, \[callback\])](http://nodejs.org/api/util.html#util_util_pump_readablestream_writablestream_callback)
-   [util.inherits(constructor, superConstructor)](http://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor)

Module
------

### Modules

-   [Cycles](http://nodejs.org/api/modules.html#modules_cycles)
-   [Core Modules](http://nodejs.org/api/modules.html#modules_core_modules)
-   [File Modules](http://nodejs.org/api/modules.html#modules_file_modules)
-   [Loading from `node_modules` Folders](http://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders)
-   [Folders as Modules](http://nodejs.org/api/modules.html#modules_folders_as_modules)
-   [Caching](http://nodejs.org/api/modules.html#modules_caching)
-   [Module Caching Caveats](http://nodejs.org/api/modules.html#modules_module_caching_caveats)
-   [The `module` Object](http://nodejs.org/api/modules.html#modules_the_module_object)
-   [module.exports](http://nodejs.org/api/modules.html#modules_module_exports)
-   [module.require(id)](http://nodejs.org/api/modules.html#modules_module_require_id)
-   [module.id](http://nodejs.org/api/modules.html#modules_module_id)
-   [module.filename](http://nodejs.org/api/modules.html#modules_module_filename)
-   [module.loaded](http://nodejs.org/api/modules.html#modules_module_loaded)
-   [module.parent](http://nodejs.org/api/modules.html#modules_module_parent)
-   [module.children](http://nodejs.org/api/modules.html#modules_module_children)
-   [All Together...](http://nodejs.org/api/modules.html#modules_all_together)
-   [Loading from the global folders](http://nodejs.org/api/modules.html#modules_loading_from_the_global_folders)
-   [Accessing the main module](http://nodejs.org/api/modules.html#modules_accessing_the_main_module)
-   [Addenda: Package Manager Tips](http://nodejs.org/api/modules.html#modules_addenda_package_manager_tips)

### Addons

-   [Addons](http://nodejs.org/api/addons.html#addons_addons)
-   [Hello world](http://nodejs.org/api/addons.html#addons_hello_world)
-   [Addon patterns](http://nodejs.org/api/addons.html#addons_addon_patterns)
-   [Function arguments](http://nodejs.org/api/addons.html#addons_function_arguments)
-   [Callbacks](http://nodejs.org/api/addons.html#addons_callbacks)
-   [Object factory](http://nodejs.org/api/addons.html#addons_object_factory)
-   [Function factory](http://nodejs.org/api/addons.html#addons_function_factory)
-   [Wrapping C++ objects](http://nodejs.org/api/addons.html#addons_wrapping_c_objects)
-   [Factory of wrapped objects](http://nodejs.org/api/addons.html#addons_factory_of_wrapped_objects)
-   [Passing wrapped objects around](http://nodejs.org/api/addons.html#addons_passing_wrapped_objects_around)

Buffer/Stream
-------------

### Buffer

-   [Buffer](http://nodejs.org/api/buffer.html#buffer_buffer)
-   [Class: Buffer](http://nodejs.org/api/buffer.html#buffer_class_buffer)
-   [new Buffer(size)](http://nodejs.org/api/buffer.html#buffer_new_buffer_size)
-   [new Buffer(array)](http://nodejs.org/api/buffer.html#buffer_new_buffer_array)
-   [new Buffer(str, \[encoding\])](http://nodejs.org/api/buffer.html#buffer_new_buffer_str_encoding)
-   [buf.write(string, \[offset\], \[length\], \[encoding\])](http://nodejs.org/api/buffer.html#buffer_buf_write_string_offset_length_encoding)
-   [buf.toString(\[encoding\], \[start\], \[end\])](http://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end)
-   [buf\[index\]](http://nodejs.org/api/buffer.html#buffer_buf_index)
-   [Class Method: Buffer.isBuffer(obj)](http://nodejs.org/api/buffer.html#buffer_class_method_buffer_isbuffer_obj)
-   [Class Method: Buffer.byteLength(string, \[encoding\])](http://nodejs.org/api/buffer.html#buffer_class_method_buffer_bytelength_string_encoding)
-   [Class Method: Buffer.concat(list, \[totalLength\])](http://nodejs.org/api/buffer.html#buffer_class_method_buffer_concat_list_totallength)
-   [buf.length](http://nodejs.org/api/buffer.html#buffer_buf_length)
-   [buf.copy(targetBuffer, \[targetStart\], \[sourceStart\], \[sourceEnd\])](http://nodejs.org/api/buffer.html#buffer_buf_copy_targetbuffer_targetstart_sourcestart_sourceend)
-   [buf.slice(\[start\], \[end\])](http://nodejs.org/api/buffer.html#buffer_buf_slice_start_end)
-   [buf.readUInt8(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readuint8_offset_noassert)
-   [buf.readUInt16LE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readuint16le_offset_noassert)
-   [buf.readUInt16BE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readuint16be_offset_noassert)
-   [buf.readUInt32LE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readuint32le_offset_noassert)
-   [buf.readUInt32BE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readuint32be_offset_noassert)
-   [buf.readInt8(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readint8_offset_noassert)
-   [buf.readInt16LE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readint16le_offset_noassert)
-   [buf.readInt16BE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readint16be_offset_noassert)
-   [buf.readInt32LE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readint32le_offset_noassert)
-   [buf.readInt32BE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readint32be_offset_noassert)
-   [buf.readFloatLE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readfloatle_offset_noassert)
-   [buf.readFloatBE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readfloatbe_offset_noassert)
-   [buf.readDoubleLE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readdoublele_offset_noassert)
-   [buf.readDoubleBE(offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_readdoublebe_offset_noassert)
-   [buf.writeUInt8(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeuint8_value_offset_noassert)
-   [buf.writeUInt16LE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeuint16le_value_offset_noassert)
-   [buf.writeUInt16BE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeuint16be_value_offset_noassert)
-   [buf.writeUInt32LE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeuint32le_value_offset_noassert)
-   [buf.writeUInt32BE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeuint32be_value_offset_noassert)
-   [buf.writeInt8(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeint8_value_offset_noassert)
-   [buf.writeInt16LE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeint16le_value_offset_noassert)
-   [buf.writeInt16BE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeint16be_value_offset_noassert)
-   [buf.writeInt32LE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeint32le_value_offset_noassert)
-   [buf.writeInt32BE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writeint32be_value_offset_noassert)
-   [buf.writeFloatLE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writefloatle_value_offset_noassert)
-   [buf.writeFloatBE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writefloatbe_value_offset_noassert)
-   [buf.writeDoubleLE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writedoublele_value_offset_noassert)
-   [buf.writeDoubleBE(value, offset, \[noAssert\])](http://nodejs.org/api/buffer.html#buffer_buf_writedoublebe_value_offset_noassert)
-   [buf.fill(value, \[offset\], \[end\])](http://nodejs.org/api/buffer.html#buffer_buf_fill_value_offset_end)
-   [buffer.INSPECT\_MAX\_BYTES](http://nodejs.org/api/buffer.html#buffer_buffer_inspect_max_bytes)
-   [Class: SlowBuffer](http://nodejs.org/api/buffer.html#buffer_class_slowbuffer)

### Stream

-   [Readable Stream](http://nodejs.org/api/stream.html#stream_readable_stream)
-   [Event: 'data'](http://nodejs.org/api/stream.html#stream_event_data)
-   [Event: 'end'](http://nodejs.org/api/stream.html#stream_event_end)
-   [Event: 'error'](http://nodejs.org/api/stream.html#stream_event_error)
-   [Event: 'close'](http://nodejs.org/api/stream.html#stream_event_close)
-   [stream.readable](http://nodejs.org/api/stream.html#stream_stream_readable)
-   [stream.setEncoding(\[encoding\])](http://nodejs.org/api/stream.html#stream_stream_setencoding_encoding)
-   [stream.pause()](http://nodejs.org/api/stream.html#stream_stream_pause)
-   [stream.resume()](http://nodejs.org/api/stream.html#stream_stream_resume)
-   [stream.destroy()](http://nodejs.org/api/stream.html#stream_stream_destroy)
-   [stream.pipe(destination, \[options\])](http://nodejs.org/api/stream.html#stream_stream_pipe_destination_options)
-   [Writable Stream](http://nodejs.org/api/stream.html#stream_writable_stream)
-   [Event: 'drain'](http://nodejs.org/api/stream.html#stream_event_drain)
-   [Event: 'error'](http://nodejs.org/api/stream.html#stream_event_error_1)
-   [Event: 'close'](http://nodejs.org/api/stream.html#stream_event_close_1)
-   [Event: 'pipe'](http://nodejs.org/api/stream.html#stream_event_pipe)
-   [stream.writable](http://nodejs.org/api/stream.html#stream_stream_writable)
-   [stream.write(string, \[encoding\], \[fd\])](http://nodejs.org/api/stream.html#stream_stream_write_string_encoding_fd)
-   [stream.write(buffer)](http://nodejs.org/api/stream.html#stream_stream_write_buffer)
-   [stream.end()](http://nodejs.org/api/stream.html#stream_stream_end)
-   [stream.end(string, encoding)](http://nodejs.org/api/stream.html#stream_stream_end_string_encoding)
-   [stream.end(buffer)](http://nodejs.org/api/stream.html#stream_stream_end_buffer)
-   [stream.destroy()](http://nodejs.org/api/stream.html#stream_stream_destroy_1)
-   [stream.destroySoon()](http://nodejs.org/api/stream.html#stream_stream_destroysoon)

### TTY

-   [tty.isatty(fd)](http://nodejs.org/api/tty.html#tty_tty_isatty_fd)
-   [tty.setRawMode(mode)](http://nodejs.org/api/tty.html#tty_tty_setrawmode_mode)
-   [Class: ReadStream](http://nodejs.org/api/tty.html#tty_class_readstream)
-   [rs.isRaw](http://nodejs.org/api/tty.html#tty_rs_israw)
-   [rs.setRawMode(mode)](http://nodejs.org/api/tty.html#tty_rs_setrawmode_mode)
-   [Class WriteStream](http://nodejs.org/api/tty.html#tty_class_writestream)
-   [ws.columns](http://nodejs.org/api/tty.html#tty_ws_columns)
-   [ws.rows](http://nodejs.org/api/tty.html#tty_ws_rows)
-   [Event: 'resize'](http://nodejs.org/api/tty.html#tty_event_resize)

Process/Events
--------------

### Process

-   [Event: 'exit'](http://nodejs.org/api/process.html#process_event_exit)
-   [Event: 'uncaughtException'](http://nodejs.org/api/process.html#process_event_uncaughtexception)
-   [Signal Events](http://nodejs.org/api/process.html#process_signal_events)
-   [process.stdout](http://nodejs.org/api/process.html#process_process_stdout)
-   [process.stderr](http://nodejs.org/api/process.html#process_process_stderr)
-   [process.stdin](http://nodejs.org/api/process.html#process_process_stdin)
-   [process.argv](http://nodejs.org/api/process.html#process_process_argv)
-   [process.execPath](http://nodejs.org/api/process.html#process_process_execpath)
-   [process.abort()](http://nodejs.org/api/process.html#process_process_abort)
-   [process.chdir(directory)](http://nodejs.org/api/process.html#process_process_chdir_directory)
-   [process.cwd()](http://nodejs.org/api/process.html#process_process_cwd)
-   [process.env](http://nodejs.org/api/process.html#process_process_env)
-   [process.exit(\[code\])](http://nodejs.org/api/process.html#process_process_exit_code)
-   [process.getgid()](http://nodejs.org/api/process.html#process_process_getgid)
-   [process.setgid(id)](http://nodejs.org/api/process.html#process_process_setgid_id)
-   [process.getuid()](http://nodejs.org/api/process.html#process_process_getuid)
-   [process.setuid(id)](http://nodejs.org/api/process.html#process_process_setuid_id)
-   [process.version](http://nodejs.org/api/process.html#process_process_version)
-   [process.versions](http://nodejs.org/api/process.html#process_process_versions)
-   [process.config](http://nodejs.org/api/process.html#process_process_config)
-   [process.kill(pid, \[signal\])](http://nodejs.org/api/process.html#process_process_kill_pid_signal)
-   [process.pid](http://nodejs.org/api/process.html#process_process_pid)
-   [process.title](http://nodejs.org/api/process.html#process_process_title)
-   [process.arch](http://nodejs.org/api/process.html#process_process_arch)
-   [process.platform](http://nodejs.org/api/process.html#process_process_platform)
-   [process.memoryUsage()](http://nodejs.org/api/process.html#process_process_memoryusage)
-   [process.nextTick(callback)](http://nodejs.org/api/process.html#process_process_nexttick_callback)
-   [process.umask(\[mask\])](http://nodejs.org/api/process.html#process_process_umask_mask)
-   [process.uptime()](http://nodejs.org/api/process.html#process_process_uptime)
-   [process.hrtime()](http://nodejs.org/api/process.html#process_process_hrtime)

### Events

-   [Class: events.EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter)
-   [emitter.addListener(event, listener)](http://nodejs.org/api/events.html#events_emitter_addlistener_event_listener)
-   [emitter.on(event, listener)](http://nodejs.org/api/events.html#events_emitter_on_event_listener)
-   [emitter.once(event, listener)](http://nodejs.org/api/events.html#events_emitter_once_event_listener)
-   [emitter.removeListener(event, listener)](http://nodejs.org/api/events.html#events_emitter_removelistener_event_listener)
-   [emitter.removeAllListeners(\[event\])](http://nodejs.org/api/events.html#events_emitter_removealllisteners_event)
-   [emitter.setMaxListeners(n)](http://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n)
-   [emitter.listeners(event)](http://nodejs.org/api/events.html#events_emitter_listeners_event)
-   [emitter.emit(event, \[arg1\], \[arg2\], \[...\])](http://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2)
-   [Event: 'newListener'](http://nodejs.org/api/events.html#events_event_newlistener)

Domain
------

### Domain

-   [Additions to Error objects](http://nodejs.org/api/domain.html#domain_additions_to_error_objects)
-   [Implicit Binding](http://nodejs.org/api/domain.html#domain_implicit_binding)
-   [Explicit Binding](http://nodejs.org/api/domain.html#domain_explicit_binding)
-   [domain.create()](http://nodejs.org/api/domain.html#domain_domain_create)
-   [Class: Domain](http://nodejs.org/api/domain.html#domain_class_domain)
-   [domain.run(fn)](http://nodejs.org/api/domain.html#domain_domain_run_fn)
-   [domain.members](http://nodejs.org/api/domain.html#domain_domain_members)
-   [domain.add(emitter)](http://nodejs.org/api/domain.html#domain_domain_add_emitter)
-   [domain.remove(emitter)](http://nodejs.org/api/domain.html#domain_domain_remove_emitter)
-   [domain.bind(cb)](http://nodejs.org/api/domain.html#domain_domain_bind_cb)
-   [Example](http://nodejs.org/api/domain.html#domain_example)
-   [domain.intercept(cb)](http://nodejs.org/api/domain.html#domain_domain_intercept_cb)
-   [Example](http://nodejs.org/api/domain.html#domain_example_1)
-   [domain.dispose()](http://nodejs.org/api/domain.html#domain_domain_dispose)

### Crypto

-   [crypto.createCredentials(details)](http://nodejs.org/api/crypto.html#crypto_crypto_createcredentials_details)
-   [crypto.createHash(algorithm)](http://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm)
-   [Class: Hash](http://nodejs.org/api/crypto.html#crypto_class_hash)
-   [hash.update(data, \[input\_encoding\])](http://nodejs.org/api/crypto.html#crypto_hash_update_data_input_encoding)
-   [hash.digest(\[encoding\])](http://nodejs.org/api/crypto.html#crypto_hash_digest_encoding)
-   [crypto.createHmac(algorithm, key)](http://nodejs.org/api/crypto.html#crypto_crypto_createhmac_algorithm_key)
-   [Class: Hmac](http://nodejs.org/api/crypto.html#crypto_class_hmac)
-   [hmac.update(data)](http://nodejs.org/api/crypto.html#crypto_hmac_update_data)
-   [hmac.digest(\[encoding\])](http://nodejs.org/api/crypto.html#crypto_hmac_digest_encoding)
-   [crypto.createCipher(algorithm, password)](http://nodejs.org/api/crypto.html#crypto_crypto_createcipher_algorithm_password)
-   [crypto.createCipheriv(algorithm, key, iv)](http://nodejs.org/api/crypto.html#crypto_crypto_createcipheriv_algorithm_key_iv)
-   [Class: Cipher](http://nodejs.org/api/crypto.html#crypto_class_cipher)
-   [cipher.update(data, \[input\_encoding\], \[output\_encoding\])](http://nodejs.org/api/crypto.html#crypto_cipher_update_data_input_encoding_output_encoding)
-   [cipher.final(\[output\_encoding\])](http://nodejs.org/api/crypto.html#crypto_cipher_final_output_encoding)
-   [cipher.setAutoPadding(auto\_padding=true)](http://nodejs.org/api/crypto.html#crypto_cipher_setautopadding_auto_padding_true)
-   [crypto.createDecipher(algorithm, password)](http://nodejs.org/api/crypto.html#crypto_crypto_createdecipher_algorithm_password)
-   [crypto.createDecipheriv(algorithm, key, iv)](http://nodejs.org/api/crypto.html#crypto_crypto_createdecipheriv_algorithm_key_iv)
-   [Class: Decipher](http://nodejs.org/api/crypto.html#crypto_class_decipher)
-   [decipher.update(data, \[input\_encoding\], \[output\_encoding\])](http://nodejs.org/api/crypto.html#crypto_decipher_update_data_input_encoding_output_encoding)
-   [decipher.final(\[output\_encoding\])](http://nodejs.org/api/crypto.html#crypto_decipher_final_output_encoding)
-   [decipher.setAutoPadding(auto\_padding=true)](http://nodejs.org/api/crypto.html#crypto_decipher_setautopadding_auto_padding_true)
-   [crypto.createSign(algorithm)](http://nodejs.org/api/crypto.html#crypto_crypto_createsign_algorithm)
-   [Class: Signer](http://nodejs.org/api/crypto.html#crypto_class_signer)
-   [signer.update(data)](http://nodejs.org/api/crypto.html#crypto_signer_update_data)
-   [signer.sign(private\_key, \[output\_format\])](http://nodejs.org/api/crypto.html#crypto_signer_sign_private_key_output_format)
-   [crypto.createVerify(algorithm)](http://nodejs.org/api/crypto.html#crypto_crypto_createverify_algorithm)
-   [Class: Verify](http://nodejs.org/api/crypto.html#crypto_class_verify)
-   [verifier.update(data)](http://nodejs.org/api/crypto.html#crypto_verifier_update_data)
-   [verifier.verify(object, signature, \[signature\_format\])](http://nodejs.org/api/crypto.html#crypto_verifier_verify_object_signature_signature_format)
-   [crypto.createDiffieHellman(prime\_length)](http://nodejs.org/api/crypto.html#crypto_crypto_creatediffiehellman_prime_length)
-   [crypto.createDiffieHellman(prime, \[encoding\])](http://nodejs.org/api/crypto.html#crypto_crypto_creatediffiehellman_prime_encoding)
-   [Class: DiffieHellman](http://nodejs.org/api/crypto.html#crypto_class_diffiehellman)
-   [diffieHellman.generateKeys(\[encoding\])](http://nodejs.org/api/crypto.html#crypto_diffiehellman_generatekeys_encoding)
-   [diffieHellman.computeSecret(other\_public\_key, \[input\_encoding\], \[output\_encoding\])](http://nodejs.org/api/crypto.html#crypto_diffiehellman_computesecret_other_public_key_input_encoding_output_encoding)
-   [diffieHellman.getPrime(\[encoding\])](http://nodejs.org/api/crypto.html#crypto_diffiehellman_getprime_encoding)
-   [diffieHellman.getGenerator(\[encoding\])](http://nodejs.org/api/crypto.html#crypto_diffiehellman_getgenerator_encoding)
-   [diffieHellman.getPublicKey(\[encoding\])](http://nodejs.org/api/crypto.html#crypto_diffiehellman_getpublickey_encoding)
-   [diffieHellman.getPrivateKey(\[encoding\])](http://nodejs.org/api/crypto.html#crypto_diffiehellman_getprivatekey_encoding)
-   [diffieHellman.setPublicKey(public\_key, \[encoding\])](http://nodejs.org/api/crypto.html#crypto_diffiehellman_setpublickey_public_key_encoding)
-   [diffieHellman.setPrivateKey(public\_key, \[encoding\])](http://nodejs.org/api/crypto.html#crypto_diffiehellman_setprivatekey_public_key_encoding)
-   [crypto.getDiffieHellman(group\_name)](http://nodejs.org/api/crypto.html#crypto_crypto_getdiffiehellman_group_name)
-   [crypto.pbkdf2(password, salt, iterations, keylen, callback)](http://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_callback)
-   [crypto.randomBytes(size, \[callback\])](http://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback)

### TSL(SSL)

-   [Client-initiated renegotiation attack mitigation](http://nodejs.org/api/tls.html#tls_client_initiated_renegotiation_attack_mitigation)
-   [NPN and SNI](http://nodejs.org/api/tls.html#tls_npn_and_sni)
-   [tls.createServer(options, \[secureConnectionListener\])](http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener)
-   [tls.connect(options, \[secureConnectListener\])](http://nodejs.org/api/tls.html#tls_tls_connect_options_secureconnectlistener)
-   [tls.connect(port, \[host\], \[options\], \[secureConnectListener\])](http://nodejs.org/api/tls.html#tls_tls_connect_port_host_options_secureconnectlistener)
-   [tls.createSecurePair(\[credentials\], \[isServer\], \[requestCert\], \[rejectUnauthorized\])](http://nodejs.org/api/tls.html#tls_tls_createsecurepair_credentials_isserver_requestcert_rejectunauthorized)
-   [Class: SecurePair](http://nodejs.org/api/tls.html#tls_class_securepair)
-   [Event: 'secure'](http://nodejs.org/api/tls.html#tls_event_secure)
-   [Class: tls.Server](http://nodejs.org/api/tls.html#tls_class_tls_server)
-   [Event: 'secureConnection'](http://nodejs.org/api/tls.html#tls_event_secureconnection)
-   [Event: 'clientError'](http://nodejs.org/api/tls.html#tls_event_clienterror)
-   [server.listen(port, \[host\], \[callback\])](http://nodejs.org/api/tls.html#tls_server_listen_port_host_callback)
-   [server.close()](http://nodejs.org/api/tls.html#tls_server_close)
-   [server.address()](http://nodejs.org/api/tls.html#tls_server_address)
-   [server.addContext(hostname, credentials)](http://nodejs.org/api/tls.html#tls_server_addcontext_hostname_credentials)
-   [server.maxConnections](http://nodejs.org/api/tls.html#tls_server_maxconnections)
-   [server.connections](http://nodejs.org/api/tls.html#tls_server_connections)
-   [Class: tls.CleartextStream](http://nodejs.org/api/tls.html#tls_class_tls_cleartextstream)
-   [Event: 'secureConnect'](http://nodejs.org/api/tls.html#tls_event_secureconnect)
-   [cleartextStream.authorized](http://nodejs.org/api/tls.html#tls_cleartextstream_authorized)
-   [cleartextStream.authorizationError](http://nodejs.org/api/tls.html#tls_cleartextstream_authorizationerror)
-   [cleartextStream.getPeerCertificate()](http://nodejs.org/api/tls.html#tls_cleartextstream_getpeercertificate)
-   [cleartextStream.getCipher()](http://nodejs.org/api/tls.html#tls_cleartextstream_getcipher)
-   [cleartextStream.address()](http://nodejs.org/api/tls.html#tls_cleartextstream_address)
-   [cleartextStream.remoteAddress](http://nodejs.org/api/tls.html#tls_cleartextstream_remoteaddress)
-   [cleartextStream.remotePort](http://nodejs.org/api/tls.html#tls_cleartextstream_remoteport)

### StringDecoder

-   [Class: StringDecoder](http://nodejs.org/api/string_decoder.html#string_decoder_class_stringdecoder)
-   -   [StringDecoder.write(buffer)](http://nodejs.org/api/string_decoder.html#string_decoder_stringdecoder_write_buffer)

File
----

### File System

-   [fs.rename(oldPath, newPath, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback)
-   [fs.renameSync(oldPath, newPath)](http://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath)
-   [fs.truncate(fd, len, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_truncate_fd_len_callback)
-   [fs.truncateSync(fd, len)](http://nodejs.org/api/fs.html#fs_fs_truncatesync_fd_len)
-   [fs.chown(path, uid, gid, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_chown_path_uid_gid_callback)
-   [fs.chownSync(path, uid, gid)](http://nodejs.org/api/fs.html#fs_fs_chownsync_path_uid_gid)
-   [fs.fchown(fd, uid, gid, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_fchown_fd_uid_gid_callback)
-   [fs.fchownSync(fd, uid, gid)](http://nodejs.org/api/fs.html#fs_fs_fchownsync_fd_uid_gid)
-   [fs.lchown(path, uid, gid, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_lchown_path_uid_gid_callback)
-   [fs.lchownSync(path, uid, gid)](http://nodejs.org/api/fs.html#fs_fs_lchownsync_path_uid_gid)
-   [fs.chmod(path, mode, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback)
-   [fs.chmodSync(path, mode)](http://nodejs.org/api/fs.html#fs_fs_chmodsync_path_mode)
-   [fs.fchmod(fd, mode, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_fchmod_fd_mode_callback)
-   [fs.fchmodSync(fd, mode)](http://nodejs.org/api/fs.html#fs_fs_fchmodsync_fd_mode)
-   [fs.lchmod(path, mode, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_lchmod_path_mode_callback)
-   [fs.lchmodSync(path, mode)](http://nodejs.org/api/fs.html#fs_fs_lchmodsync_path_mode)
-   [fs.stat(path, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_stat_path_callback)
-   [fs.lstat(path, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_lstat_path_callback)
-   [fs.fstat(fd, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_fstat_fd_callback)
-   [fs.statSync(path)](http://nodejs.org/api/fs.html#fs_fs_statsync_path)
-   [fs.lstatSync(path)](http://nodejs.org/api/fs.html#fs_fs_lstatsync_path)
-   [fs.fstatSync(fd)](http://nodejs.org/api/fs.html#fs_fs_fstatsync_fd)
-   [fs.link(srcpath, dstpath, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_link_srcpath_dstpath_callback)
-   [fs.linkSync(srcpath, dstpath)](http://nodejs.org/api/fs.html#fs_fs_linksync_srcpath_dstpath)
-   [fs.symlink(destination, path, \[type\], \[callback\])](http://nodejs.org/api/fs.html#fs_fs_symlink_destination_path_type_callback)
-   [fs.symlinkSync(destination, path, \[type\])](http://nodejs.org/api/fs.html#fs_fs_symlinksync_destination_path_type)
-   [fs.readlink(path, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_readlink_path_callback)
-   [fs.readlinkSync(path)](http://nodejs.org/api/fs.html#fs_fs_readlinksync_path)
-   [fs.realpath(path, \[cache\], callback)](http://nodejs.org/api/fs.html#fs_fs_realpath_path_cache_callback)
-   [fs.realpathSync(path, \[cache\])](http://nodejs.org/api/fs.html#fs_fs_realpathsync_path_cache)
-   [fs.unlink(path, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_unlink_path_callback)
-   [fs.unlinkSync(path)](http://nodejs.org/api/fs.html#fs_fs_unlinksync_path)
-   [fs.rmdir(path, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_rmdir_path_callback)
-   [fs.rmdirSync(path)](http://nodejs.org/api/fs.html#fs_fs_rmdirsync_path)
-   [fs.mkdir(path, \[mode\], \[callback\])](http://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback)
-   [fs.mkdirSync(path, \[mode\])](http://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode)
-   [fs.readdir(path, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback)
-   [fs.readdirSync(path)](http://nodejs.org/api/fs.html#fs_fs_readdirsync_path)
-   [fs.close(fd, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_close_fd_callback)
-   [fs.closeSync(fd)](http://nodejs.org/api/fs.html#fs_fs_closesync_fd)
-   [fs.open(path, flags, \[mode\], \[callback\])](http://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback)
-   [fs.openSync(path, flags, \[mode\])](http://nodejs.org/api/fs.html#fs_fs_opensync_path_flags_mode)
-   [fs.utimes(path, atime, mtime, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_utimes_path_atime_mtime_callback)
-   [fs.utimesSync(path, atime, mtime)](http://nodejs.org/api/fs.html#fs_fs_utimessync_path_atime_mtime)
-   [fs.futimes(fd, atime, mtime, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_futimes_fd_atime_mtime_callback)
-   [fs.futimesSync(fd, atime, mtime)](http://nodejs.org/api/fs.html#fs_fs_futimessync_fd_atime_mtime)
-   [fs.fsync(fd, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_fsync_fd_callback)
-   [fs.fsyncSync(fd)](http://nodejs.org/api/fs.html#fs_fs_fsyncsync_fd)
-   [fs.write(fd, buffer, offset, length, position, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback)
-   [fs.writeSync(fd, buffer, offset, length, position)](http://nodejs.org/api/fs.html#fs_fs_writesync_fd_buffer_offset_length_position)
-   [fs.read(fd, buffer, offset, length, position, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback)
-   [fs.readSync(fd, buffer, offset, length, position)](http://nodejs.org/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position)
-   [fs.readFile(filename, \[encoding\], \[callback\])](http://nodejs.org/api/fs.html#fs_fs_readfile_filename_encoding_callback)
-   [fs.readFileSync(filename, \[encoding\])](http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_encoding)
-   [fs.writeFile(filename, data, \[encoding\], \[callback\])](http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_encoding_callback)
-   [fs.writeFileSync(filename, data, \[encoding\])](http://nodejs.org/api/fs.html#fs_fs_writefilesync_filename_data_encoding)
-   [fs.appendFile(filename, data, encoding='utf8', \[callback\])](http://nodejs.org/api/fs.html#fs_fs_appendfile_filename_data_encoding_utf8_callback)
-   [fs.appendFileSync(filename, data, encoding='utf8')](http://nodejs.org/api/fs.html#fs_fs_appendfilesync_filename_data_encoding_utf8)
-   [fs.watchFile(filename, \[options\], listener)](http://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener)
-   [fs.unwatchFile(filename)](http://nodejs.org/api/fs.html#fs_fs_unwatchfile_filename)
-   [fs.watch(filename, \[options\], \[listener\])](http://nodejs.org/api/fs.html#fs_fs_watch_filename_options_listener)
-   [Caveats](http://nodejs.org/api/fs.html#fs_caveats)
-   [Availability](http://nodejs.org/api/fs.html#fs_availability)
-   [Filename Argument](http://nodejs.org/api/fs.html#fs_filename_argument)
-   [fs.exists(path, \[callback\])](http://nodejs.org/api/fs.html#fs_fs_exists_path_callback)
-   [fs.existsSync(path)](http://nodejs.org/api/fs.html#fs_fs_existssync_path)
-   [Class: fs.Stats](http://nodejs.org/api/fs.html#fs_class_fs_stats)
-   [fs.createReadStream(path, \[options\])](http://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
-   [Class: fs.ReadStream](http://nodejs.org/api/fs.html#fs_class_fs_readstream)
-   [Event: 'open'](http://nodejs.org/api/fs.html#fs_event_open)
-   [fs.createWriteStream(path, \[options\])](http://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options)
-   [fs.WriteStream](http://nodejs.org/api/fs.html#fs_fs_writestream)
-   [Event: 'open'](http://nodejs.org/api/fs.html#fs_event_open_1)
-   [file.bytesWritten](http://nodejs.org/api/fs.html#fs_file_byteswritten)
-   [Class: fs.FSWatcher](http://nodejs.org/api/fs.html#fs_class_fs_fswatcher)
-   [watcher.close()](http://nodejs.org/api/fs.html#fs_watcher_close)
-   [Event: 'change'](http://nodejs.org/api/fs.html#fs_event_change)
-   [Event: 'error'](http://nodejs.org/api/fs.html#fs_event_error)

Net
---

### net

-   [net.createServer(\[options\], \[connectionListener\])](http://nodejs.org/api/net.html#net_net_createserver_options_connectionlistener)
-   [net.connect(options, \[connectionListener\])](http://nodejs.org/api/net.html#net_net_connect_options_connectionlistener)
-   [net.createConnection(options, \[connectionListener\])](http://nodejs.org/api/net.html#net_net_createconnection_options_connectionlistener)
-   [net.connect(port, \[host\], \[connectListener\])](http://nodejs.org/api/net.html#net_net_connect_port_host_connectlistener)
-   [net.createConnection(port, \[host\], \[connectListener\])](http://nodejs.org/api/net.html#net_net_createconnection_port_host_connectlistener)
-   [net.connect(path, \[connectListener\])](http://nodejs.org/api/net.html#net_net_connect_path_connectlistener)
-   [net.createConnection(path, \[connectListener\])](http://nodejs.org/api/net.html#net_net_createconnection_path_connectlistener)
-   [Class: net.Server](http://nodejs.org/api/net.html#net_class_net_server)
-   [server.listen(port, \[host\], \[backlog\], \[listeningListener\])](http://nodejs.org/api/net.html#net_server_listen_port_host_backlog_listeninglistener)
-   [server.listen(path, \[listeningListener\])](http://nodejs.org/api/net.html#net_server_listen_path_listeninglistener)
-   [server.listen(handle, \[listeningListener\])](http://nodejs.org/api/net.html#net_server_listen_handle_listeninglistener)
-   [server.close(\[cb\])](http://nodejs.org/api/net.html#net_server_close_cb)
-   [server.address()](http://nodejs.org/api/net.html#net_server_address)
-   [server.maxConnections](http://nodejs.org/api/net.html#net_server_maxconnections)
-   [server.connections](http://nodejs.org/api/net.html#net_server_connections)
-   [Event: 'listening'](http://nodejs.org/api/net.html#net_event_listening)
-   [Event: 'connection'](http://nodejs.org/api/net.html#net_event_connection)
-   [Event: 'close'](http://nodejs.org/api/net.html#net_event_close)
-   [Event: 'error'](http://nodejs.org/api/net.html#net_event_error)
-   [Class: net.Socket](http://nodejs.org/api/net.html#net_class_net_socket)
-   [new net.Socket(\[options\])](http://nodejs.org/api/net.html#net_new_net_socket_options)
-   [socket.connect(port, \[host\], \[connectListener\])](http://nodejs.org/api/net.html#net_socket_connect_port_host_connectlistener)
-   [socket.connect(path, \[connectListener\])](http://nodejs.org/api/net.html#net_socket_connect_path_connectlistener)
-   [socket.bufferSize](http://nodejs.org/api/net.html#net_socket_buffersize)
-   [socket.setEncoding(\[encoding\])](http://nodejs.org/api/net.html#net_socket_setencoding_encoding)
-   [socket.write(data, \[encoding\], \[callback\])](http://nodejs.org/api/net.html#net_socket_write_data_encoding_callback)
-   [socket.end(\[data\], \[encoding\])](http://nodejs.org/api/net.html#net_socket_end_data_encoding)
-   [socket.destroy()](http://nodejs.org/api/net.html#net_socket_destroy)
-   [socket.pause()](http://nodejs.org/api/net.html#net_socket_pause)
-   [socket.resume()](http://nodejs.org/api/net.html#net_socket_resume)
-   [socket.setTimeout(timeout, \[callback\])](http://nodejs.org/api/net.html#net_socket_settimeout_timeout_callback)
-   [socket.setNoDelay(\[noDelay\])](http://nodejs.org/api/net.html#net_socket_setnodelay_nodelay)
-   [socket.setKeepAlive(\[enable\], \[initialDelay\])](http://nodejs.org/api/net.html#net_socket_setkeepalive_enable_initialdelay)
-   [socket.address()](http://nodejs.org/api/net.html#net_socket_address)
-   [socket.remoteAddress](http://nodejs.org/api/net.html#net_socket_remoteaddress)
-   [socket.remotePort](http://nodejs.org/api/net.html#net_socket_remoteport)
-   [socket.bytesRead](http://nodejs.org/api/net.html#net_socket_bytesread)
-   [socket.bytesWritten](http://nodejs.org/api/net.html#net_socket_byteswritten)
-   [Event: 'connect'](http://nodejs.org/api/net.html#net_event_connect)
-   [Event: 'data'](http://nodejs.org/api/net.html#net_event_data)
-   [Event: 'end'](http://nodejs.org/api/net.html#net_event_end)
-   [Event: 'timeout'](http://nodejs.org/api/net.html#net_event_timeout)
-   [Event: 'drain'](http://nodejs.org/api/net.html#net_event_drain)
-   [Event: 'error'](http://nodejs.org/api/net.html#net_event_error_1)
-   [Event: 'close'](http://nodejs.org/api/net.html#net_event_close_1)
-   [net.isIP(input)](http://nodejs.org/api/net.html#net_net_isip_input)
-   [net.isIPv4(input)](http://nodejs.org/api/net.html#net_net_isipv4_input)
-   [net.isIPv6(input)](http://nodejs.org/api/net.html#net_net_isipv6_input)

### UDP / Datagram Sockets

-   [dgram.createSocket(type, \[callback\])](#dgram_dgram_createsocket_type_callback)
-   [Class: Socket](#dgram_class_socket)
-   [Event: 'message'](#dgram_event_message)
-   [Event: 'listening'](#dgram_event_listening)
-   [Event: 'close'](#dgram_event_close)
-   [Event: 'error'](#dgram_event_error)
-   [dgram.send(buf, offset, length, port, address, \[callback\])](#dgram_dgram_send_buf_offset_length_port_address_callback)
-   [dgram.bind(port, \[address\])](#dgram_dgram_bind_port_address)
-   [dgram.close()](#dgram_dgram_close)
-   [dgram.address()](#dgram_dgram_address)
-   [dgram.setBroadcast(flag)](#dgram_dgram_setbroadcast_flag)
-   [dgram.setTTL(ttl)](#dgram_dgram_setttl_ttl)
-   [dgram.setMulticastTTL(ttl)](#dgram_dgram_setmulticastttl_ttl)
-   [dgram.setMulticastLoopback(flag)](#dgram_dgram_setmulticastloopback_flag)
-   [dgram.addMembership(multicastAddress, \[multicastInterface\])](#dgram_dgram_addmembership_multicastaddress_multicastinterface)
-   [dgram.dropMembership(multicastAddress, \[multicastInterface\])](#dgram_dgram_dropmembership_multicastaddress_multicastinterface)

### DNS

-   [dns.lookup(domain, \[family\], callback)](http://nodejs.org/api/dns.html#dns_dns_lookup_domain_family_callback)
-   [dns.resolve(domain, \[rrtype\], callback)](http://nodejs.org/api/dns.html#dns_dns_resolve_domain_rrtype_callback)
-   [dns.resolve4(domain, callback)](http://nodejs.org/api/dns.html#dns_dns_resolve4_domain_callback)
-   [dns.resolve6(domain, callback)](http://nodejs.org/api/dns.html#dns_dns_resolve6_domain_callback)
-   [dns.resolveMx(domain, callback)](http://nodejs.org/api/dns.html#dns_dns_resolvemx_domain_callback)
-   [dns.resolveTxt(domain, callback)](http://nodejs.org/api/dns.html#dns_dns_resolvetxt_domain_callback)
-   [dns.resolveSrv(domain, callback)](http://nodejs.org/api/dns.html#dns_dns_resolvesrv_domain_callback)
-   [dns.resolveNs(domain, callback)](http://nodejs.org/api/dns.html#dns_dns_resolvens_domain_callback)
-   [dns.resolveCname(domain, callback)](http://nodejs.org/api/dns.html#dns_dns_resolvecname_domain_callback)
-   [dns.reverse(ip, callback)](http://nodejs.org/api/dns.html#dns_dns_reverse_ip_callback)
-   [Error codes](http://nodejs.org/api/dns.html#dns_error_codes)

Text
----

### Path

-   [path.normalize(p)](http://nodejs.org/api/path.html#path_path_normalize_p)
-   [path.join(\[path1\], \[path2\], \[...\])](http://nodejs.org/api/path.html#path_path_join_path1_path2)
-   [path.resolve(\[from ...\], to)](http://nodejs.org/api/path.html#path_path_resolve_from_to)
-   [path.relative(from, to)](http://nodejs.org/api/path.html#path_path_relative_from_to)
-   [path.dirname(p)](http://nodejs.org/api/path.html#path_path_dirname_p)
-   [path.basename(p, \[ext\])](http://nodejs.org/api/path.html#path_path_basename_p_ext)
-   [path.extname(p)](http://nodejs.org/api/path.html#path_path_extname_p)
-   [path.sep](http://nodejs.org/api/path.html#path_path_sep)

### Query String

-   [querystring.stringify(obj, \[sep\], \[eq\])](http://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq)
-   [querystring.parse(str, \[sep\], \[eq\], \[options\])](http://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options)
-   [querystring.escape](http://nodejs.org/api/querystring.html#querystring_querystring_escape)
-   [querystring.unescape](http://nodejs.org/api/querystring.html#querystring_querystring_unescape)

### punnycode

-   [punycode.decode(string)](http://nodejs.org/api/punycode.html#punycode_punycode_decode_string)
-   [punycode.encode(string)](http://nodejs.org/api/punycode.html#punycode_punycode_encode_string)
-   [punycode.toUnicode(domain)](http://nodejs.org/api/punycode.html#punycode_punycode_tounicode_domain)
-   [punycode.toASCII(domain)](http://nodejs.org/api/punycode.html#punycode_punycode_toascii_domain)
-   [punycode.ucs2](http://nodejs.org/api/punycode.html#punycode_punycode_ucs2)
-   [punycode.ucs2.decode(string)](http://nodejs.org/api/punycode.html#punycode_punycode_ucs2_decode_string)
-   [punycode.ucs2.encode(codePoints)](http://nodejs.org/api/punycode.html#punycode_punycode_ucs2_encode_codepoints)
-   [punycode.version](http://nodejs.org/api/punycode.html#punycode_punycode_version)

### Readline

-   [readline.createInterface(options)](http://nodejs.org/api/readline.html#readline_readline_createinterface_options)
-   [Class: Interface](http://nodejs.org/api/readline.html#readline_class_interface)
-   [rl.setPrompt(prompt, length)](http://nodejs.org/api/readline.html#readline_rl_setprompt_prompt_length)
-   [rl.prompt(\[preserveCursor\])](http://nodejs.org/api/readline.html#readline_rl_prompt_preservecursor)
-   [rl.question(query, callback)](http://nodejs.org/api/readline.html#readline_rl_question_query_callback)
-   [rl.pause()](http://nodejs.org/api/readline.html#readline_rl_pause)
-   [rl.resume()](http://nodejs.org/api/readline.html#readline_rl_resume)
-   [rl.close()](http://nodejs.org/api/readline.html#readline_rl_close)
-   [rl.write(data, \[key\])](http://nodejs.org/api/readline.html#readline_rl_write_data_key)
-   [Events](http://nodejs.org/api/readline.html#readline_events)
-   [Event: 'line'](http://nodejs.org/api/readline.html#readline_event_line)
-   [Event: 'pause'](http://nodejs.org/api/readline.html#readline_event_pause)
-   [Event: 'resume'](http://nodejs.org/api/readline.html#readline_event_resume)
-   [Event: 'close'](http://nodejs.org/api/readline.html#readline_event_close)
-   [Event: 'SIGINT'](http://nodejs.org/api/readline.html#readline_event_sigint)
-   [Event: 'SIGTSTP'](http://nodejs.org/api/readline.html#readline_event_sigtstp)
-   [Event: 'SIGCONT'](http://nodejs.org/api/readline.html#readline_event_sigcont)
-   [Example: Tiny CLI](http://nodejs.org/api/readline.html#readline_example_tiny_cli)

### REPL

-   [repl.start(options)](http://nodejs.org/api/repl.html#repl_repl_start_options)
-   [Event: 'exit'](http://nodejs.org/api/repl.html#repl_event_exit)
-   [REPL Features](http://nodejs.org/api/repl.html#repl_repl_features)

HTTP
----

### http

-   [http.STATUS\_CODES](http://nodejs.org/api/http.html#http_http_status_codes)
-   [http.createServer(\[requestListener\])](http://nodejs.org/api/http.html#http_http_createserver_requestlistener)
-   [http.createClient(\[port\], \[host\])](http://nodejs.org/api/http.html#http_http_createclient_port_host)
-   [http.request(options, callback)](http://nodejs.org/api/http.html#http_http_request_options_callback)
-   [http.get(options, callback)](http://nodejs.org/api/http.html#http_http_get_options_callback)
-   [http.globalAgent](http://nodejs.org/api/http.html#http_http_globalagent)

### Class: http.Server

-   [Event: 'request'](http://nodejs.org/api/http.html#http_event_request)
-   [Event: 'connection'](http://nodejs.org/api/http.html#http_event_connection)
-   [Event: 'close'](http://nodejs.org/api/http.html#http_event_close)
-   [Event: 'checkContinue'](http://nodejs.org/api/http.html#http_event_checkcontinue)
-   [Event: 'connect'](http://nodejs.org/api/http.html#http_event_connect)
-   [Event: 'upgrade'](http://nodejs.org/api/http.html#http_event_upgrade)
-   [Event: 'clientError'](http://nodejs.org/api/http.html#http_event_clienterror)
-   [server.listen(port, \[hostname\], \[backlog\], \[callback\])](http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)
-   [server.listen(path, \[callback\])](http://nodejs.org/api/http.html#http_server_listen_path_callback)
-   [server.listen(handle, \[listeningListener\])](http://nodejs.org/api/http.html#http_server_listen_handle_listeninglistener)
-   [server.close(\[cb\])](http://nodejs.org/api/http.html#http_server_close_cb)
-   [server.maxHeadersCount](http://nodejs.org/api/http.html#http_server_maxheaderscount)

### Class: http.ServerRequest

-   [Event: 'data'](http://nodejs.org/api/http.html#http_event_data)
-   [Event: 'end'](http://nodejs.org/api/http.html#http_event_end)
-   [Event: 'close'](http://nodejs.org/api/http.html#http_event_close_1)
-   [request.method](http://nodejs.org/api/http.html#http_request_method)
-   [request.url](http://nodejs.org/api/http.html#http_request_url)
-   [request.headers](http://nodejs.org/api/http.html#http_request_headers)
-   [request.trailers](http://nodejs.org/api/http.html#http_request_trailers)
-   [request.httpVersion](http://nodejs.org/api/http.html#http_request_httpversion)
-   [request.setEncoding(\[encoding\])](http://nodejs.org/api/http.html#http_request_setencoding_encoding)
-   [request.pause()](http://nodejs.org/api/http.html#http_request_pause)
-   [request.resume()](http://nodejs.org/api/http.html#http_request_resume)
-   [request.connection](http://nodejs.org/api/http.html#http_request_connection)

### Class: http.ServerResponse

-   [Event: 'close'](http://nodejs.org/api/http.html#http_event_close_2)
-   [response.writeContinue()](http://nodejs.org/api/http.html#http_response_writecontinue)
-   [response.writeHead(statusCode, \[reasonPhrase\], \[headers\])](http://nodejs.org/api/http.html#http_response_writehead_statuscode_reasonphrase_headers)
-   [response.statusCode](http://nodejs.org/api/http.html#http_response_statuscode)
-   [response.setHeader(name, value)](http://nodejs.org/api/http.html#http_response_setheader_name_value)
-   [response.sendDate](http://nodejs.org/api/http.html#http_response_senddate)
-   [response.getHeader(name)](http://nodejs.org/api/http.html#http_response_getheader_name)
-   [response.removeHeader(name)](http://nodejs.org/api/http.html#http_response_removeheader_name)
-   [response.write(chunk, \[encoding\])](http://nodejs.org/api/http.html#http_response_write_chunk_encoding)
-   [response.addTrailers(headers)](http://nodejs.org/api/http.html#http_response_addtrailers_headers)
-   [response.end(\[data\], \[encoding\])](http://nodejs.org/api/http.html#http_response_end_data_encoding)

### Class: http.Agent

-   [agent.maxSockets](http://nodejs.org/api/http.html#http_agent_maxsockets)
-   [agent.sockets](http://nodejs.org/api/http.html#http_agent_sockets)
-   [agent.requests](http://nodejs.org/api/http.html#http_agent_requests)

### Class: http.ClientRequest

-   [Event 'response'](http://nodejs.org/api/http.html#http_event_response)
-   [Event: 'socket'](http://nodejs.org/api/http.html#http_event_socket)
-   [Event: 'connect'](http://nodejs.org/api/http.html#http_event_connect_1)
-   [Event: 'upgrade'](http://nodejs.org/api/http.html#http_event_upgrade_1)
-   [Event: 'continue'](http://nodejs.org/api/http.html#http_event_continue)
-   [request.write(chunk, \[encoding\])](http://nodejs.org/api/http.html#http_request_write_chunk_encoding)
-   [request.end(\[data\], \[encoding\])](http://nodejs.org/api/http.html#http_request_end_data_encoding)
-   [request.abort()](http://nodejs.org/api/http.html#http_request_abort)
-   [request.setTimeout(timeout, \[callback\])](http://nodejs.org/api/http.html#http_request_settimeout_timeout_callback)
-   [request.setNoDelay(\[noDelay\])](http://nodejs.org/api/http.html#http_request_setnodelay_nodelay)
-   [request.setSocketKeepAlive(\[enable\], \[initialDelay\])](http://nodejs.org/api/http.html#http_request_setsocketkeepalive_enable_initialdelay)

### http.ClientResponse

-   [Event: 'data'](http://nodejs.org/api/http.html#http_event_data_1)
-   [Event: 'end'](http://nodejs.org/api/http.html#http_event_end_1)
-   [Event: 'close'](http://nodejs.org/api/http.html#http_event_close_3)
-   [response.statusCode](http://nodejs.org/api/http.html#http_response_statuscode_1)
-   [response.httpVersion](http://nodejs.org/api/http.html#http_response_httpversion)
-   [response.headers](http://nodejs.org/api/http.html#http_response_headers)
-   [response.trailers](http://nodejs.org/api/http.html#http_response_trailers)
-   [response.setEncoding(\[encoding\])](http://nodejs.org/api/http.html#http_response_setencoding_encoding)
-   [response.pause()](http://nodejs.org/api/http.html#http_response_pause)
-   [response.resume()](http://nodejs.org/api/http.html#http_response_resume)

### HTTPS

-   [Class: https.Server](http://nodejs.org/api/https.html#https_class_https_server)
-   [https.createServer(options, \[requestListener\])](http://nodejs.org/api/https.html#https_https_createserver_options_requestlistener)
-   [https.request(options, callback)](http://nodejs.org/api/https.html#https_https_request_options_callback)
-   [https.get(options, callback)](http://nodejs.org/api/https.html#https_https_get_options_callback)
-   [Class: https.Agent](http://nodejs.org/api/https.html#https_class_https_agent)
-   [https.globalAgent](http://nodejs.org/api/https.html#https_https_globalagent)

### URL

-   [url.parse(urlStr, \[parseQueryString\], \[slashesDenoteHost\])](http://nodejs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost)
-   [url.format(urlObj)](http://nodejs.org/api/url.html#url_url_format_urlobj)
-   [url.resolve(from, to)](http://nodejs.org/api/url.html#url_url_resolve_from_to)

Code
----

### Executing JS

-   [Caveats](http://nodejs.org/api/vm.html#vm_caveats)
-   [Sandboxes](http://nodejs.org/api/vm.html#vm_sandboxes)
-   [Globals](http://nodejs.org/api/vm.html#vm_globals)
-   [vm.runInThisContext(code, \[filename\])](http://nodejs.org/api/vm.html#vm_vm_runinthiscontext_code_filename)
-   [vm.runInNewContext(code, \[sandbox\], \[filename\])](http://nodejs.org/api/vm.html#vm_vm_runinnewcontext_code_sandbox_filename)
-   [vm.runInContext(code, context, \[filename\])](http://nodejs.org/api/vm.html#vm_vm_runincontext_code_context_filename)
-   [vm.createContext(\[initSandbox\])](http://nodejs.org/api/vm.html#vm_vm_createcontext_initsandbox)
-   [vm.createScript(code, \[filename\])](http://nodejs.org/api/vm.html#vm_vm_createscript_code_filename)
-   [Class: Script](http://nodejs.org/api/vm.html#vm_class_script)
-   [script.runInThisContext()](http://nodejs.org/api/vm.html#vm_script_runinthiscontext)
-   [script.runInNewContext(\[sandbox\])](http://nodejs.org/api/vm.html#vm_script_runinnewcontext_sandbox)

### Child Process

-   [Class: ChildProcess](http://nodejs.org/api/child_process.html#child_process_class_childprocess)
-   [Event: 'exit'](http://nodejs.org/api/child_process.html#child_process_event_exit)
-   [Event: 'close'](http://nodejs.org/api/child_process.html#child_process_event_close)
-   [Event: 'disconnect'](http://nodejs.org/api/child_process.html#child_process_event_disconnect)
-   [Event: 'message'](http://nodejs.org/api/child_process.html#child_process_event_message)
-   [child.stdin](http://nodejs.org/api/child_process.html#child_process_child_stdin)
-   [child.stdout](http://nodejs.org/api/child_process.html#child_process_child_stdout)
-   [child.stderr](http://nodejs.org/api/child_process.html#child_process_child_stderr)
-   [child.pid](http://nodejs.org/api/child_process.html#child_process_child_pid)
-   [child.kill(\[signal\])](http://nodejs.org/api/child_process.html#child_process_child_kill_signal)
-   [child.send(message, \[sendHandle\])](http://nodejs.org/api/child_process.html#child_process_child_send_message_sendhandle)
-   [child.disconnect()](http://nodejs.org/api/child_process.html#child_process_child_disconnect)
-   [child\_process.spawn(command, \[args\], \[options\])](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)
-   [child\_process.exec(command, \[options\], callback)](http://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)
-   [child\_process.execFile(file, args, options, callback)](http://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)
-   [child\_process.fork(modulePath, \[args\], \[options\])](http://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)

### Assert

-   [assert.fail(actual, expected, message, operator)](http://nodejs.org/api/assert.html#assert_assert_fail_actual_expected_message_operator)
-   [assert(value, message), assert.ok(value, \[message\])](http://nodejs.org/api/assert.html#assert_assert_value_message_assert_ok_value_message)
-   [assert.equal(actual, expected, \[message\])](http://nodejs.org/api/assert.html#assert_assert_equal_actual_expected_message)
-   [assert.notEqual(actual, expected, \[message\])](http://nodejs.org/api/assert.html#assert_assert_notequal_actual_expected_message)
-   [assert.deepEqual(actual, expected, \[message\])](http://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message)
-   [assert.notDeepEqual(actual, expected, \[message\])](http://nodejs.org/api/assert.html#assert_assert_notdeepequal_actual_expected_message)
-   [assert.strictEqual(actual, expected, \[message\])](http://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message)
-   [assert.notStrictEqual(actual, expected, \[message\])](http://nodejs.org/api/assert.html#assert_assert_notstrictequal_actual_expected_message)
-   [assert.throws(block, \[error\], \[message\])](http://nodejs.org/api/assert.html#assert_assert_throws_block_error_message)
-   [assert.doesNotThrow(block, \[error\], \[message\])](http://nodejs.org/api/assert.html#assert_assert_doesnotthrow_block_error_message)
-   [assert.ifError(value)](http://nodejs.org/api/assert.html#assert_assert_iferror_value)

System
------

### Zlib

-   [Examples](http://nodejs.org/api/zlib.html#zlib_examples)
-   [zlib.createGzip(\[options\])](http://nodejs.org/api/zlib.html#zlib_zlib_creategzip_options)
-   [zlib.createGunzip(\[options\])](http://nodejs.org/api/zlib.html#zlib_zlib_creategunzip_options)
-   [zlib.createDeflate(\[options\])](http://nodejs.org/api/zlib.html#zlib_zlib_createdeflate_options)
-   [zlib.createInflate(\[options\])](http://nodejs.org/api/zlib.html#zlib_zlib_createinflate_options)
-   [zlib.createDeflateRaw(\[options\])](http://nodejs.org/api/zlib.html#zlib_zlib_createdeflateraw_options)
-   [zlib.createInflateRaw(\[options\])](http://nodejs.org/api/zlib.html#zlib_zlib_createinflateraw_options)
-   [zlib.createUnzip(\[options\])](http://nodejs.org/api/zlib.html#zlib_zlib_createunzip_options)
-   [Class: zlib.Gzip](http://nodejs.org/api/zlib.html#zlib_class_zlib_gzip)
-   [Class: zlib.Gunzip](http://nodejs.org/api/zlib.html#zlib_class_zlib_gunzip)
-   [Class: zlib.Deflate](http://nodejs.org/api/zlib.html#zlib_class_zlib_deflate)
-   [Class: zlib.Inflate](http://nodejs.org/api/zlib.html#zlib_class_zlib_inflate)
-   [Class: zlib.DeflateRaw](http://nodejs.org/api/zlib.html#zlib_class_zlib_deflateraw)
-   [Class: zlib.InflateRaw](http://nodejs.org/api/zlib.html#zlib_class_zlib_inflateraw)
-   [Class: zlib.Unzip](http://nodejs.org/api/zlib.html#zlib_class_zlib_unzip)
-   [Convenience Methods](http://nodejs.org/api/zlib.html#zlib_convenience_methods)
-   [zlib.deflate(buf, callback)](http://nodejs.org/api/zlib.html#zlib_zlib_deflate_buf_callback)
-   [zlib.deflateRaw(buf, callback)](http://nodejs.org/api/zlib.html#zlib_zlib_deflateraw_buf_callback)
-   [zlib.gzip(buf, callback)](http://nodejs.org/api/zlib.html#zlib_zlib_gzip_buf_callback)
-   [zlib.gunzip(buf, callback)](http://nodejs.org/api/zlib.html#zlib_zlib_gunzip_buf_callback)
-   [zlib.inflate(buf, callback)](http://nodejs.org/api/zlib.html#zlib_zlib_inflate_buf_callback)
-   [zlib.inflateRaw(buf, callback)](http://nodejs.org/api/zlib.html#zlib_zlib_inflateraw_buf_callback)
-   [zlib.unzip(buf, callback)](http://nodejs.org/api/zlib.html#zlib_zlib_unzip_buf_callback)
-   [Options](http://nodejs.org/api/zlib.html#zlib_options)
-   [Memory Usage Tuning](http://nodejs.org/api/zlib.html#zlib_memory_usage_tuning)
-   [Constants](http://nodejs.org/api/zlib.html#zlib_constants)

### os

-   [os.tmpDir()](http://nodejs.org/api/os.html#os_os_tmpdir)
-   [os.hostname()](http://nodejs.org/api/os.html#os_os_hostname)
-   [os.type()](http://nodejs.org/api/os.html#os_os_type)
-   [os.platform()](http://nodejs.org/api/os.html#os_os_platform)
-   [os.arch()](http://nodejs.org/api/os.html#os_os_arch)
-   [os.release()](http://nodejs.org/api/os.html#os_os_release)
-   [os.uptime()](http://nodejs.org/api/os.html#os_os_uptime)
-   [os.loadavg()](http://nodejs.org/api/os.html#os_os_loadavg)
-   [os.totalmem()](http://nodejs.org/api/os.html#os_os_totalmem)
-   [os.freemem()](http://nodejs.org/api/os.html#os_os_freemem)
-   [os.cpus()](http://nodejs.org/api/os.html#os_os_cpus)
-   [os.networkInterfaces()](http://nodejs.org/api/os.html#os_os_networkinterfaces)
-   [os.EOL](http://nodejs.org/api/os.html#os_os_eol)

### Debugger

-   [Watchers](http://nodejs.org/api/debugger.html#debugger_watchers)
-   [Commands reference](http://nodejs.org/api/debugger.html#debugger_commands_reference)
-   [Stepping](http://nodejs.org/api/debugger.html#debugger_stepping)
-   [Breakpoints](http://nodejs.org/api/debugger.html#debugger_breakpoints)
-   [Info](http://nodejs.org/api/debugger.html#debugger_info)
-   [Execution control](http://nodejs.org/api/debugger.html#debugger_execution_control)
-   [Various](http://nodejs.org/api/debugger.html#debugger_various)
-   [Advanced Usage](http://nodejs.org/api/debugger.html#debugger_advanced_usage)

### Cluster

-   [How It Works](http://nodejs.org/api/cluster.html#cluster_how_it_works)
-   [cluster.settings](http://nodejs.org/api/cluster.html#cluster_cluster_settings)
-   [cluster.isMaster](http://nodejs.org/api/cluster.html#cluster_cluster_ismaster)
-   [cluster.isWorker](http://nodejs.org/api/cluster.html#cluster_cluster_isworker)
-   [Event: 'fork'](http://nodejs.org/api/cluster.html#cluster_event_fork)
-   [Event: 'online'](http://nodejs.org/api/cluster.html#cluster_event_online)
-   [Event: 'listening'](http://nodejs.org/api/cluster.html#cluster_event_listening)
-   [Event: 'disconnect'](http://nodejs.org/api/cluster.html#cluster_event_disconnect)
-   [Event: 'exit'](http://nodejs.org/api/cluster.html#cluster_event_exit)
-   [Event: 'setup'](http://nodejs.org/api/cluster.html#cluster_event_setup)
-   [cluster.setupMaster(\[settings\])](http://nodejs.org/api/cluster.html#cluster_cluster_setupmaster_settings)
-   [cluster.fork(\[env\])](http://nodejs.org/api/cluster.html#cluster_cluster_fork_env)
-   [cluster.settings](http://nodejs.org/api/cluster.html#cluster_cluster_settings_1)
-   [cluster.disconnect(\[callback\])](http://nodejs.org/api/cluster.html#cluster_cluster_disconnect_callback)
-   [cluster.workers](http://nodejs.org/api/cluster.html#cluster_cluster_workers)
-   [Class: Worker](http://nodejs.org/api/cluster.html#cluster_class_worker)
-   [worker.id](http://nodejs.org/api/cluster.html#cluster_worker_id)
-   [worker.process](http://nodejs.org/api/cluster.html#cluster_worker_process)
-   [worker.suicide](http://nodejs.org/api/cluster.html#cluster_worker_suicide)
-   [worker.send(message, \[sendHandle\])](http://nodejs.org/api/cluster.html#cluster_worker_send_message_sendhandle)
-   [worker.destroy()](http://nodejs.org/api/cluster.html#cluster_worker_destroy)
-   [worker.disconnect()](http://nodejs.org/api/cluster.html#cluster_worker_disconnect)
-   [Event: 'message'](http://nodejs.org/api/cluster.html#cluster_event_message)
-   [Event: 'online'](http://nodejs.org/api/cluster.html#cluster_event_online_1)
-   [Event: 'listening'](http://nodejs.org/api/cluster.html#cluster_event_listening_1)
-   [Event: 'disconnect'](http://nodejs.org/api/cluster.html#cluster_event_disconnect_1)
-   [Event: 'exit'](http://nodejs.org/api/cluster.html#cluster_event_exit_1)

3rd Party
---------

### Third Party Modules

-   Module Installer: [npm](https://github.com/isaacs/npm)
-   HTTP Middleware: [Connect](https://github.com/senchalabs/connect)
-   Web Framework: [Express](https://github.com/visionmedia/express)
-   Web Sockets: [Socket.IO](https://github.com/learnboost/socket.io)
-   HTML Parsing: [HTML5](https://github.com/aredridel/html5)
-   [mDNS/Zeroconf/Bonjour](https://github.com/agnat/node_mdns)/li&gt;
-   [RabbitMQ, AMQP](https://github.com/postwait/node-amqp)
-   [mysql](https://github.com/felixge/node-mysql)
-   Serialization: [msgpack](https://github.com/pgriess/node-msgpack)
-   Scraping: [Apricot](https://github.com/silentrob/Apricot)
-   Debugger: [ndb](https://github.com/smtlaissezfaire/ndb) is a CLI debugger[inspector](https://github.com/dannycoates/node-inspector) is a web based tool.
-   [pcap binding](https://github.com/mranney/node_pcap)
-   [ncurses](https://github.com/mscdex/node-ncurses)
-   Testing/TDD/BDD: [vows](http://vowsjs.org/),[mocha](https://github.com/visionmedia/mocha),[mjsunit.runner](https://github.com/tmpvar/mjsunit.runner)
